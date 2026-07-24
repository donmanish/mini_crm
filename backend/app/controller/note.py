from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.note_schema import NoteCreate, NoteResponse
from app.services import note_service

router = APIRouter(tags=["Notes"])


@router.post("/notes", response_model=NoteResponse)
def create_note(
    note: NoteCreate,
    db: Session = Depends(get_db)
):
    result = note_service.create_note(db, note)

    if result is None:
        raise HTTPException(
            status_code=404,
            detail="Customer not found"
        )

    return result


@router.get("/notes/{customer_id}")
def get_notes(
    customer_id: int,
    db: Session = Depends(get_db)
):
    return note_service.get_notes_by_customer(db, customer_id)