import httpx

from backend.config import AI_AGENT_URL

async def ask_ai_agent(question: str):
    try:
        async with httpx.AsyncClient(
            timeout=30.0
        ) as client:
            response = await client.post(
                f"{AI_AGENT_URL}/query",
                json={
                    "question": question
                }
            )
            response.raise_for_status()
            return response.json()
    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }