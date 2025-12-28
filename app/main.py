from fastapi import FastAPI
from app.db.session import engine
from app.db.base import Base
from app.models import user  # noqa

app = FastAPI(title="Auth Service")


@app.on_event("startup")
def on_startup():
    Base.metadata.create_all(bind=engine)


@app.get("/health")
def health_check():
    return {"status": "ok"}
