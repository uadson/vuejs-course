from sqlmodel import Field, SQLModel


class ProductBase(SQLModel):
    name: str = Field(index=True)
    price: float
    

class Product(ProductBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    
    
class ProductCreate(ProductBase):
    pass


class ProductPublic(ProductBase):
    id: int
    
    
class ProductUpdate(SQLModel):
    name: str | None = None
    price: float | None = None
