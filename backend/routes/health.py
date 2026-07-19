from fastapi import APIRouter
router = APIRouter()
@router.get("/health")
def health():
    return{
        "status":"Running",
        "backend": "FastAPI",
        "project": "Metric Mind"
    }