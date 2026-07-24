from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db

from app.schemas.ai import CustomerInsightRequest
from app.services.ai_service import generate_customer_insights, generate_customer_insights_test

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)


@router.post("/customer-insights")
def customer_insights(request: CustomerInsightRequest, db: Session = Depends(get_db)):

    result = generate_customer_insights(db, request)

    return result

@router.post("/customer-insights-test")
def customer_insights(request: CustomerInsightRequest, db: Session = Depends(get_db)):

    result = generate_customer_insights_test(db, request)

    return result