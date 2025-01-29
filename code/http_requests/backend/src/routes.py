from db import get_session
from fastapi import APIRouter, status, Depends, Query, HTTPException, Response
from models import ProductPublic, ProductCreate, Product, ProductUpdate
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import select

router = APIRouter()


@router.post('/', response_model=ProductPublic, status_code=status.HTTP_201_CREATED)
async def create_product(*, session: AsyncSession = Depends(get_session), product:ProductCreate):
    db_product = Product.model_validate(product)
    session.add(db_product)
    await session.commit()
    session.refresh(db_product)
    return db_product


@router.get('/', response_model=list[ProductPublic], status_code=status.HTTP_200_OK)
async def read_products(
    *, 
    session: AsyncSession = Depends(get_session),
    offset: int=0,
    limit: int = Query(default=100, le=100)
):
    async with session as db_session:
        query = select(Product).offset(offset).limit(limit)
        result = await session.execute(query)
        products: list[ProductPublic] = result.scalars().all()
        
        return products


@router.get('/{product_id}', response_model=ProductPublic, status_code=status.HTTP_200_OK)
async def read_product(
    *, 
    session: AsyncSession = Depends(get_session),
    product_id: int
):
    async with session as db_session:
        query = select(Product).filter(Product.id == product_id)
        result = await session.execute(query)
        product = result.scalar_one_or_none()
        
        if product:
            return product
        else:
            raise HTTPException(detail="Product not found", status_code=status.HTTP_404_NOT_FOUND)


@router.patch('/{product_id}', response_model=ProductPublic, status_code=status.HTTP_202_ACCEPTED)
async def update_product(
    *,
    session: AsyncSession = Depends(get_session),
    product_id: int,
    product: ProductUpdate
):
    
    async with session as db_session:
        db_product = await db_session.get(Product, product_id)
        
        if not db_product:
            raise HTTPException(detail="Product not found", status_code=status.HTTP_404_NOT_FOUND)
        
        product_data = product.model_dump(exclude_unset=True)
        
        db_product.sqlmodel_update(product_data)    
        
        db_session.add(db_product)
        await db_session.commit()
        await db_session.refresh(db_product)
        
        return db_product


@router.delete('/{product_id}', status_code=status.HTTP_204_NO_CONTENT)
async def delete_product(
    *,
    session: AsyncSession = Depends(get_session),
    product_id: int
):
    async with session as db_session:
        db_product = await db_session.get(Product, product_id)
        
        if not db_product:
            raise HTTPException(detail="Product not found", status_code=status.HTTP_404_NOT_FOUND)
        
        await db_session.delete(db_product)
        await db_session.commit()
        
        return Response(status_code=status.HTTP_204_NO_CONTENT)
    
