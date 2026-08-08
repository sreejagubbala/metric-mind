from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from backend.database import get_db
from backend.models.user import User
from backend.utils.auth import (
    verify_password,
    create_access_token,
)

router = APIRouter()


@router.post("/login")
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
):
    # The frontend sends the Email ID in the
    # OAuth2 "username" field.
    user = (
        db.query(User)
        .filter(User.email == form_data.username)
        .first()
    )

    # Email not found
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Email ID or Password",
        )

    # Password doesn't match
    if not verify_password(
        form_data.password,
        user.hashed_password,
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Email ID or Password",
        )

    # Account disabled
    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="User account is inactive",
        )

    # Create JWT
    access_token = create_access_token(
        username=user.username,
        user_id=user.id,
        role=user.role,
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "role": user.role,
        },
    }