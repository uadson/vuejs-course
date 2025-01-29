from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.ext.asyncio import AsyncEngine
from sqlalchemy.ext.asyncio import AsyncSession
from settings import settings
from typing import Generator

engine: AsyncEngine = create_async_engine(settings.DATABASE_URL)

Session: AsyncSession = sessionmaker(
    autocommit=False,
    autoflush=False,
    expire_on_commit=False,
    class_=AsyncSession,
    bind=engine
)


async def get_session() -> Generator:
    session: AsyncSession = Session()
    try:
        yield session
    finally:
        await session.close()
