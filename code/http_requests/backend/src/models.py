from pydantic import field_validator
from sqlmodel import Field, SQLModel


class ProductBase(SQLModel):
    name: str = Field(index=True)
    price: float = Field()
    
    @field_validator('price')
    def price_validate(cls, value):
        if value < 0:
            raise ValueError(f"Valor informado '{value}' é inválido (Valor Negativo).")
        else:
            return float(value)
        

class Product(ProductBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    
    
class ProductCreate(ProductBase):
    pass


class ProductPublic(ProductBase):
    id: int
    
    
class ProductUpdate(SQLModel):
    name: str | None = None
    price: float | None = None
