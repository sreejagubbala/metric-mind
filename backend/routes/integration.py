from fastapi import APIRouter
from services.integration_service import (
    get_backend_status,
    get_integration_status,
    get_data_summary
)
router = APIRouter(
    prefix="/integration",
    tags=["Integration"]
)

@router.get("/status")
def integration_status():
    return get_integration_status()
@router.get("/backend")
def backend_status():
    return get_backend_status()
@router.get("/data")
def data_status():
    return get_data_summary()