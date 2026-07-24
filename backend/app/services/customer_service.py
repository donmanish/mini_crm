from sqlalchemy.orm import Session

from app.models.customer import Customer
from app.schemas.customer_schema import CustomerCreate, CustomerUpdate

from . import timeline_service


def create_customer(db: Session, customer: CustomerCreate):
    new_customer = Customer(**customer.model_dump())

    db.add(new_customer)
    db.commit()
    db.refresh(new_customer)

    timeline_service.create_timeline(
        db,
        new_customer.id,
        "Customer created"
    )

    return new_customer


def get_customers(db: Session):
    return db.query(Customer).all()


def get_customer(db: Session, customer_id: int):
    return db.query(Customer).filter(Customer.id == customer_id).first()


def update_customer(
    db: Session,
    customer_id: int,
    customer: CustomerUpdate,
):
    existing_customer = (
        db.query(Customer)
        .filter(Customer.id == customer_id)
        .first()
    )

    if not existing_customer:
        return None

    for key, value in customer.model_dump().items():
        setattr(existing_customer, key, value)

    db.commit()
    db.refresh(existing_customer)

    return existing_customer


def delete_customer(db: Session, customer_id: int):
    customer = (
        db.query(Customer)
        .filter(Customer.id == customer_id)
        .first()
    )

    if not customer:
        return None

    db.delete(customer)
    db.commit()

    return {"message": "Customer deleted successfully"}