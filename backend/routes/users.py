from fastapi import (
    APIRouter,
    Depends,
    HTTPException
)
from models.api_models import UserCreate
from auth import get_current_user

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)
users = [
    {
        "id": 1,
        "username": "admin",
        "role": "admin"
    }
]

@router.get("/me")
def get_my_profile(
    current_user: dict = Depends(
        get_current_user
    )
):
    for user in users:
        if (user["id"]== current_user["user_id"]):
            return user
    return current_user

@router.get("/")
def get_users(
    current_user: dict = Depends(
        get_current_user
    )
):
    return {
        "users": users
    }

@router.post("/")
def create_user(
    user: UserCreate,
    current_user: dict = Depends(
        get_current_user
    )
):
    if (current_user["user_id"]!= 1):
        raise HTTPException(
            status_code=403,
            detail="Only admin can create users"
        )

    new_user = {
        "id": len(users) + 1,
        "username": user.username,
        "role": user.role
    }

    users.append(
        new_user
    )

    return {
        "message": "User created successfully",
        "user": new_user
    }