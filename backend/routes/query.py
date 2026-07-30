from fastapi import APIRouter
from fastapi import Depends

from backend.models.query import QueryRequest
from backend.models.user import User
from backend.services.logging_service import log_query
from backend.services.ai_service import ask_ai_agent
from backend.utils.auth import (
    get_current_user
)

router = APIRouter()

@router.post("/")
async def process_query(
    request: QueryRequest,
    current_user: User = Depends(
        get_current_user
    )
):
    question = request.question.strip()
    if not question:
        return {
            "status": "error",
            "message": "Question cannot be empty"
        }
    result = await ask_ai_agent(question)

    if result.get("status") == "error":
        answer = (
            "Unable to process the query "
            "through the AI Agent."
        )
        log_query(
            question=question,
            answer=answer,
            status="error",
            username=current_user.username
        )
        return {
            "status": "error",
            "question": question,
            "answer": answer
        }

    answer = result.get(
        "answer",
        "No answer returned."
    )
    log_query(
        question=question,
        answer=answer,
        status="success",
        username=current_user.username
    )
    return {
        "status": "success",
        "question": question,
        "answer": answer,
        "data": result,
        "user": current_user.username
    }