from fastapi import APIRouter
from fastapi import Depends

from backend.config import (
    AI_AGENT_URL,
    SEMANTIC_LAYER_URL
)
from backend.models.user import User
from backend.utils.auth import (
    get_current_user
)

router = APIRouter()

@router.get("/status")
def integration_status(
    current_user: User = Depends(
        get_current_user
    )
):
    return {
        "project": "MetricMind",
        "backend": {
            "status": "connected"
        },
        "ai_agent": {
            "url": AI_AGENT_URL,
            "status": "configured"
        },
        "semantic_layer": {
            "url": SEMANTIC_LAYER_URL,
            "status": "configured"
        }
    }