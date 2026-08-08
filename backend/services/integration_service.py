from backend.config import AI_AGENT_URL, SEMANTIC_LAYER_URL


def get_integration_status():
    return {
        "ai_agent": AI_AGENT_URL,
        "semantic_layer": SEMANTIC_LAYER_URL,
        "status": "configured"
    }