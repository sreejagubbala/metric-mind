from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.database import Base
from backend.database import engine
from backend.models import user
from backend.config import (
    PROJECT_NAME,
    VERSION
)
from backend.routes import (
    health,
    analytics,
    auth,
    users,
    integration,
    query,
    
)
from backend.routes import summary

Base.metadata.create_all(
    bind=engine
)

app = FastAPI(
    title=PROJECT_NAME,
    version=VERSION,
    description=(
        "MetricMind "
        "Agentic Semantic BI Engine"
    )
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(
    health.router,
    tags=["Health"]
)

app.include_router(
    analytics.router,
    prefix="/analytics",
    tags=["Analytics"]
)

app.include_router(
    auth.router,
    prefix="/auth",
    tags=["Authentication"]
)

app.include_router(
    summary.router,
    prefix="/summary",
    tags=["summary"]
)

app.include_router(
    users.router,
    prefix="/users",
    tags=["Users"]
)

app.include_router(
    integration.router,
    prefix="/integration",
    tags=["Integration"]
)

app.include_router(
    query.router,
    prefix="/query",
    tags=["Query"]
)

@app.get("/")
def home():
    return {
        "project":"MetricMind",
        "message": "Backend Running Successfully",
        "version": VERSION
    }