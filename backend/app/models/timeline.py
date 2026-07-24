from datetime import datetime

from sqlalchemy import ForeignKey, String, DateTime
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base



class Timeline(Base):

    __tablename__ = "timelines"


    id: Mapped[int] = mapped_column(
        primary_key=True
    )


    customer_id: Mapped[int] = mapped_column(
        ForeignKey("customers.id"),
        nullable=False
    )


    event: Mapped[str] = mapped_column(
        String,
        nullable=False
    )


    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.now
    )


    customer = relationship(
        "Customer",
        back_populates="timeline"
    )