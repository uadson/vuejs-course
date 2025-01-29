from db import engine
from sqlmodel import SQLModel
from time import sleep


async def create_tables() -> None:
    import __all_models
    print("Creating tables ...")
    sleep(3)
    
    async with engine.begin() as conn:
        await conn.run_sync(SQLModel.metadata.drop_all)
        await conn.run_sync(SQLModel.metadata.create_all)
    
    print("Tables created successfully")
    sleep(3)
    
if __name__ == "__main__":
    import asyncio
    asyncio.run(create_tables())
