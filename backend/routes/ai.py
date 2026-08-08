from fastapi import APIRouter, Depends
from pydantic import BaseModel

from backend.services.ai_service import process_question
from backend.utils.auth import get_current_user


router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)


class QuestionRequest(BaseModel):
    question: str


@router.post("/ask")
def ask_question(
    request: QuestionRequest,
    current_user=Depends(get_current_user)
):
    result = process_question(request.question)

    return {
        "question": request.question,
        "answer": result.get(
            "answer",
            "No answer returned."
        ),
        "success": result.get(
            "success",
            False
        ),
        "user": current_user.username
    }