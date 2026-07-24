from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.customer_schema import CustomerCreate, CustomerUpdate, CustomerResponse

from app.services import customer_service

router = APIRouter(tags=["Customers"])


@router.post("/customers",  response_model=CustomerResponse)
def create_customer(
    customer: CustomerCreate,
    db: Session = Depends(get_db),
):
    return customer_service.create_customer(db, customer)


@router.get("/customers")
def get_customers(
    db: Session = Depends(get_db),
):
    return customer_service.get_customers(db)


@router.get("/customer/{id}")
def get_customer(
    id: int,
    db: Session = Depends(get_db),
):
    customer = customer_service.get_customer(db, id)

    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")

    return customer


@router.put("/customer/{id}")
def update_customer(
    id: int,
    customer: CustomerUpdate,
    db: Session = Depends(get_db),
):
    updated_customer = customer_service.update_customer(
        db,
        id,
        customer,
    )

    if not updated_customer:
        raise HTTPException(status_code=404, detail="Customer not found")

    return updated_customer


@router.delete("/customer/{id}")
def delete_customer(
    id: int,
    db: Session = Depends(get_db),
):
    result = customer_service.delete_customer(db, id)

    if not result:
        raise HTTPException(status_code=404, detail="Customer not found")

    return result