from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.database import Base
from backend.database import engine

from backend.models import user

from backend.config import (
    PROJECT_NAME,
    VERSION,
)

from backend.routes import (
    health,
    analytics,
    auth,
    users,
    integration,
    query,
    summary,
)


# Create database tables
Base.metadata.create_all(bind=engine)


# Create FastAPI application
app = FastAPI(
    title=PROJECT_NAME,
    version=VERSION,
    description=(
        "MetricMind "
        "Agentic Semantic BI Engine"
    ),
)


# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Health routes
app.include_router(
    health.router,
    tags=["Health"],
)


# Analytics routes
app.include_router(
    analytics.router,
    prefix="/analytics",
    tags=["Analytics"],
)


# Authentication routes
app.include_router(
    auth.router,
    prefix="/auth",
    tags=["Authentication"],
)


# Summary routes
app.include_router(
    summary.router,
    prefix="/summary",
    tags=["Summary"],
)


# Users routes
app.include_router(
    users.router,
    prefix="/users",
    tags=["Users"],
)


# Integration routes
app.include_router(
    integration.router,
    prefix="/integration",
    tags=["Integration"],
)


# Query routes
app.include_router(
    query.router,
    prefix="/query",
    tags=["Query"],
)


# Root endpoint
@app.get("/")
def home():
    return {
        "project": "MetricMind",
        "message": "Backend Running Successfully",
        "version": VERSION,
    }