import requests

from backend.config import AI_AGENT_URL


def process_question(question: str):
    if not question or not question.strip():
        return {
            "success": False,
            "answer": "Please enter a question."
        }

    try:
        response = requests.post(
            f"{AI_AGENT_URL}/query",
            json={
                "question": question
            },
            timeout=30
        )

        response.raise_for_status()

        data = response.json()

        return {
            "success": True,
            "answer": data.get(
                "answer",
                "No answer returned by AI Agent."
            ),
            "data": data
        }

    except requests.exceptions.RequestException:
        return {
            "success": False,
            "answer": (
                "AI Agent is currently unavailable."
            )
        }