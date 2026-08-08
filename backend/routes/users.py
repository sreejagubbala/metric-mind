from fastapi import APIRouter, Depends

from backend.models.user import User
from backend.schemas.user import UserResponse
from backend.utils.auth import get_current_user


router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.get(
    "/me",
    response_model=UserResponse
)
def get_current_user_profile(
    current_user: User = Depends(get_current_user)
):
    return current_user