from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

PROJECT_NAME = "MetricMind"
VERSION = "1.0.0"

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "sqlite:///./metricmind.db"
)

SECRET_KEY = os.getenv(
    "SECRET_KEY",
    "CHANGE_THIS_SECRET_KEY_IN_PRODUCTION"
)

ALGORITHM = os.getenv(
    "ALGORITHM",
    "HS256"
)

ACCESS_TOKEN_EXPIRE_MINUTES = int(
    os.getenv(
        "ACCESS_TOKEN_EXPIRE_MINUTES",
        "60"
    )
)

DATASET_PATH = (
    BASE_DIR
    / "datasets"
    / "raw"
    / "global_superstore.csv"
)

AI_AGENT_URL = os.getenv(
    "AI_AGENT_URL",
    "http://localhost:8001"
)

SEMANTIC_LAYER_URL = os.getenv(
    "SEMANTIC_LAYER_URL",
    "http://localhost:4000"
)
