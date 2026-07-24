from fastapi import FastAPI

from app.core.database import Base, engine
from app.models import Customer, Note


from app.controller.customer import router as customer_router
from app.controller.note import router as note_router
from app.controller.timeline import router as timeline_router
from app.controller.ai import router as ai_router


from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173"
    ],

    allow_credentials=True,

    allow_methods=[
        "*"
    ],

    allow_headers=[
        "*"
    ],
)

Base.metadata.create_all(bind=engine)

app.include_router(customer_router)
app.include_router(note_router)
app.include_router(timeline_router)
app.include_router(ai_router)


@app.get("/")
def home():
    return {
        "message": "AI Mini CRM API Running"
    }