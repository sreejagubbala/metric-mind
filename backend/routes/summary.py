from fastapi import APIRouter
from services.data_service import dataset_summary
router = APIRouter()
@router.get("/summary")
def summary():
    return dataset_summary()