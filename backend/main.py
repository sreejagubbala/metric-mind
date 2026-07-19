from fastapi import FastAPI

from config import APP_NAME, VERSION, DESCRIPTION

from routes.health import router as health_router
from routes.analytics import router as analytics_router
from routes.summary import router as summary_router

app = FastAPI(
    title=APP_NAME,
    version=VERSION,
    description=DESCRIPTION
)

@app.get("/")
def home():
    return {
        "project": "MetricMind",
        "message": "Backend Started Successfully"
    }

app.include_router(health_router)
app.include_router(analytics_router)
app.include_router(summary_router)