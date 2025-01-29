from db import get_session
from fastapi import APIRouter, status, Depends
from models import ProductPublic, ProductCreate, Product
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter()


@router.post('/', response_model=ProductPublic, status_code=status.HTTP_201_CREATED)
async def create(*, session: AsyncSession = Depends(get_session), product:ProductCreate):
    db_product = Product.model_validate(product)
    session.add(db_product)
    await session.commit()
    session.refresh(db_product)
    return db_product
