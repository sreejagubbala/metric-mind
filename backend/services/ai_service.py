import os
import httpx
AI_AGENT_URL = os.getenv("AI_AGENT_URL","http://localhost:8001")
async def ask_ai_agent(query: str):
    payload = {
        "query": query
    }
    try:
        async with httpx.AsyncClient(
            timeout=30.0
        ) as client:
            response = await client.post(
                f"{AI_AGENT_URL}/query",
                json=payload
            )
            response.raise_for_status()
            return response.json()
    except httpx.HTTPError as error:
        return {
            "success": False,
            "error": str(error)
        }