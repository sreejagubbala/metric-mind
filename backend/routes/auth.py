from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from backend.auth import create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.post("/login")
def login(
    form_data: OAuth2PasswordRequestForm = Depends()
):
    if (
        form_data.username == "admin"
        and form_data.password == "admin123"
    ):
        access_token = create_access_token(
            user_id=1
        )
        return {
            "access_token": access_token,
            "token_type": "bearer"
        }
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid username or password",
        headers={
            "WWW-Authenticate": "Bearer"
        }
    )