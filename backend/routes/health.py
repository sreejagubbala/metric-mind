from fastapi import APIRouter

from backend.config import (
    DATASET_PATH,
    AI_AGENT_URL,
    SEMANTIC_LAYER_URL
)

router = APIRouter()

@router.get("/health")
def health_check():
    return {
        "status": "healthy",
        "backend": "FastAPI",
        "project": "MetricMind"
    }

@router.get("/integration/status")
def integration_status():
    return {
        "backend": "running",
        "dataset": (
            "available"
            if DATASET_PATH.exists()
            else "not_found"
        ),
        "ai_agent": AI_AGENT_URL,
        "semantic_layer": SEMANTIC_LAYER_URL
    }