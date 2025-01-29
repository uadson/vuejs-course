from fastapi import APIRouter
from routes import router as product_router

api_router = APIRouter()
api_router.include_router(product_router, prefix='/products', tags=['products'])
