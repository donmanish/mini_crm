from pydantic import BaseModel, EmailStr


class CustomerCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    company: str
    designation: str | None = None
    status: str = "Lead"


class CustomerUpdate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    company: str
    designation: str | None = None
    status: str


class CustomerResponse(CustomerCreate):
    id: int

    model_config = {
        "from_attributes": True
    }