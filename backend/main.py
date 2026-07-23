from fastapi import FastAPI
from config import APP_NAME, VERSION, DESCRIPTION
from routes.health import router as health_router
from routes.analytics import router as analytics_router
from routes.summary import router as summary_router
from routes.auth import router as auth_router
from routes.integration import router as integration_router

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
app.include_router(integration_router)