from fastapi import APIRouter
from backend.services.data_service import (
    get_dataset_summary
)
router = APIRouter(
    prefix="/summary",
    tags=["Summary"]
)

@router.get("/")
def summary():
    return get_dataset_summary()