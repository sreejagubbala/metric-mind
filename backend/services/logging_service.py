from datetime import datetime
from pathlib import Path

import json

BASE_DIR = Path(
    __file__
).resolve().parent.parent

LOG_DIR = BASE_DIR / "logs"

LOG_DIR.mkdir(
    exist_ok=True
)

LOG_FILE = (
    LOG_DIR
    / "query_logs.json"
)

def log_query(
    question: str,
    answer: str,
    status: str = "success",
    username: str = None
):
    log_entry = {

        "timestamp":
            datetime.utcnow().isoformat(),

        "username":
            username,

        "question":
            question,

        "answer":
            answer,

        "status":
            status
    }

    logs = []

    if LOG_FILE.exists():
        try:
            with open(
                LOG_FILE,
                "r",
                encoding="utf-8"
            ) as file:
                logs = json.load(file)
        except Exception:
            logs = []

    logs.append(
        log_entry
    )

    with open(
        LOG_FILE,
        "w",
        encoding="utf-8"
    ) as file:
        json.dump(
            logs,
            file,
            indent=4
        )

    return log_entry