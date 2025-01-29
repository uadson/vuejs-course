from db import get_session
from fastapi import APIRouter, status, Depends, Query
from models import ProductPublic, ProductCreate, Product
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
    async with session as session_db:
        query = select(Product).offset(offset).limit(limit)
        result = await session.execute(query)
        products: list[ProductPublic] = result.scalars().all()
        
        return products
