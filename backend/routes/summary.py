from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from backend.models.user import User
from backend.services import data_service
from backend.utils.auth import (
    get_current_user
)

router = APIRouter()

@router.get("/")
def summary(
    current_user: User = Depends(
        get_current_user
    )
):
    try:
        return {
            "status": "success",
            "sales":
                data_service
                .get_sales_summary(),
            "profit":
                data_service
                .get_profit_summary()
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=(
                f"Failed to fetch "
                f"summary: {str(e)}"
            )
        )