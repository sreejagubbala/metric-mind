import httpx

from backend.config import (
    AI_AGENT_URL,
    SEMANTIC_LAYER_URL
)

async def check_service(
    url: str
):
    try:
        async with httpx.AsyncClient(
            timeout=5.0
        ) as client:
            response = await client.get(
                url
            )
            return {
                "status":
                    "connected"
                    if response.is_success
                    else "unavailable",
                "http_status":
                    response.status_code
            }
    except Exception as e:
        return {
            "status":
                "unavailable",
            "error":
                str(e)
        }

async def check_ai_agent():
    return await check_service(
        f"{AI_AGENT_URL}/health"
    )

async def check_semantic_layer():
    return await check_service(
        f"{SEMANTIC_LAYER_URL}/health"
    )