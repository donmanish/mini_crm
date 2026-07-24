from sqlalchemy.orm import Session

from app.models.customer import Customer
from app.models.note import Note
from app.schemas.note_schema import NoteCreate
from . import timeline_service

def create_note(db: Session, note: NoteCreate):
    customer = (
        db.query(Customer)
        .filter(Customer.id == note.customer_id)
        .first()
    )

    if not customer:
        return None

    new_note = Note(**note.model_dump())

    db.add(new_note)
    db.commit()
    db.refresh(new_note)

    timeline_service.create_timeline(

        db,

        note.customer_id,

        "Added customer note"

    )

    return new_note


def get_notes_by_customer(db: Session, customer_id: int):
    return (
        db.query(Note)
        .filter(Note.customer_id == customer_id)
        .order_by(Note.created_at.desc())
        .all()
    )