from sqlalchemy.orm import Session

from app.models.timeline import Timeline



def create_timeline(
    db: Session,
    customer_id:int,
    event:str
):

    timeline = Timeline(

        customer_id=customer_id,

        event=event

    )


    db.add(timeline)

    db.commit()

    db.refresh(timeline)


    return timeline





def get_customer_timeline(
    db:Session,
    customer_id:int
):

    return (
        db.query(Timeline)
        .filter(
            Timeline.customer_id == customer_id
        )
        .order_by(
            Timeline.created_at.desc()
        )
        .all()
    )