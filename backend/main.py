from fastapi import FastAPI
from backend.config import APP_NAME, VERSION, DESCRIPTION
from backend.routes.health import router as health_router
from backend.routes.analytics import router as analytics_router
from backend.routes.summary import router as summary_router
from backend.routes.auth import router as auth_router

app = FastAPI(
    title=APP_NAME,
    version=VERSION,
    description=DESCRIPTION
)

@app.get("/")
def home():
    return {
        "Project": "MetricMind",
        "Message": "Backend Running Successfully"
    }

app.include_router(health_router)
app.include_router(analytics_router)
app.include_router(summary_router)
app.include_router(auth_router)
