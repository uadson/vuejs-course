from configs.app_config import config_manager as config
from pydantic import BaseModel

config.load_config("config.toml")


class Settings(BaseModel):
    DATABASE_URL: str = config.get("database", "database_url")
    
settings: Settings = Settings()
