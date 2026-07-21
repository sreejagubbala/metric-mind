from fastapi import (
    APIRouter,
    Depends,
    HTTPException
)
from backend.models.api_models import AIQueryRequest
from backend.auth import get_current_user
from backend.services.ai_service import (
    ask_ai_agent
)

router = APIRouter(
    prefix="/ai",
    tags=["AI Agent"]
)

@router.post("/query")
async def ai_query(
   request: AIQueryRequest,
    current_user: dict = Depends(
        get_current_user
    )
):
    if not request.query.strip():
        raise HTTPException(
            status_code=400,
            detail="Query cannot be empty"
        )
    result = await ask_ai_agent(
        request.query
    )
    return {
        "user_id": current_user["user_id"],
        "query": request.query,
        "result": result
    }