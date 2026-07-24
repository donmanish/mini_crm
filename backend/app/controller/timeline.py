from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from app.core.database import get_db

from app.services import timeline_service

from app.schemas.timeline_schema import TimelineResponse



router = APIRouter(
    prefix="/timeline",
    tags=["Timeline"]
)




@router.get(
    "/{customer_id}",
    response_model=list[TimelineResponse]
)
def get_timeline(

    customer_id:int,

    db:Session=Depends(get_db)

):

    return timeline_service.get_customer_timeline(
        db,
        customer_id
    )