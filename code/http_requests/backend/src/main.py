from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api_routes import api_router

app = FastAPI()
app.include_router(api_router, prefix='/products-api/v1')

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)