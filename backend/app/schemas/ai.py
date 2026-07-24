from pydantic import BaseModel

class CustomerInsightRequest(BaseModel):
    customer_id: int
    customer_name: str
    company: str
    status: str
    notes: list[str]