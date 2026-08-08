from fastapi import APIRouter, Depends

from backend.models.query import QueryRequest
from backend.services.ai_service import process_question
from backend.services.logging_service import log_query
from backend.utils.auth import get_current_user


router = APIRouter(
    prefix="/query",
    tags=["Query"]
)


@router.post("/")
def process_query(
    request: QueryRequest,
    current_user=Depends(get_current_user)
):
    result = process_question(request.query)

    answer = result.get(
        "answer",
        "No answer returned."
    )

    status = (
        "success"
        if result.get("success", False)
        else "error"
    )

    log_query(
        question=request.query,
        answer=answer,
        status=status,
        username=current_user.username
    )

    return {
        "query": request.query,
        "answer": answer,
        "status": status
    }