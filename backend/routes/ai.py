from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from backend.models.user import User
from backend.schemas.query import QueryRequest
from backend.services.ai_service import (
    ask_ai_agent
)
from backend.utils.auth import (
    get_current_user
)

router = APIRouter()

@router.post("/ask")
async def ask_ai(
    request: QueryRequest,
    current_user: User = Depends(
        get_current_user
    )
):
    try:
        result = await ask_ai_agent(
            request.question
        )
        return {
            "status": "success",
            "question":
                request.question,
            "result":
                result
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=(
                f"AI Agent error: "
                f"{str(e)}"
            )
        )