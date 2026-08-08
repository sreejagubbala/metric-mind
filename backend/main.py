from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.config import PROJECT_NAME, VERSION
from backend.database import Base, engine
from backend.models.user import User
from backend.routes.ai import router as ai_router
from backend.routes.analytics import router as analytics_router
from backend.routes.auth import router as auth_router
from backend.routes.health import router as health_router
from backend.routes.integration import router as integration_router
from backend.routes.query import router as query_router
from backend.routes.summary import router as summary_router
from backend.routes.users import router as user_router
from backend.utils.error_handler import global_exception_handler


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title=PROJECT_NAME,
    version=VERSION
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


app.add_exception_handler(
    Exception,
    global_exception_handler
)


@app.get("/")
def home():
    return {
        "project": PROJECT_NAME,
        "message": "Backend Running Successfully",
        "version": VERSION
    }


app.include_router(health_router)
app.include_router(auth_router)
app.include_router(user_router)
app.include_router(integration_router)
app.include_router(query_router)
app.include_router(analytics_router)
app.include_router(summary_router)
app.include_router(ai_router)