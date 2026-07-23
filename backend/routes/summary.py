from fastapi import APIRouter
from services.data_service import (
    get_dataset_summary
)
router = APIRouter(
    prefix="/summary",
    tags=["Summary"]
)

@router.get("/")
def summary():
    return get_dataset_summary()