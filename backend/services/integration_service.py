from backend.services.data_service import (
    get_dataset_summary
)

def get_backend_status():
    return {
        "backend": "FastAPI",
        "status": "running",
        "service": "MetricMind Backend"
    }
def get_integration_status():
    return {
        "backend": "connected",
        "data_service": "connected",
        "semantic_layer": "pending",
        "ai_agent": "pending"
    }
def get_data_summary():
    return get_dataset_summary()