from pathlib import Path
import pandas as pd
BASE_DIR = (Path(__file__).resolve().parents[2])
DATASET_PATH = (BASE_DIR/ "datasets"/ "raw"/ "global_superstore.csv")

def load_data():
    if not DATASET_PATH.exists():
        raise FileNotFoundError(
            f"Dataset not found at: "
            f"{DATASET_PATH}"
        )
    return pd.read_csv(
        DATASET_PATH
    )
def get_total_sales():
    df = load_data()
    return round(
        float(
             df["Sales"].sum()
        ),
        2
    )
def get_total_profit():
    df = load_data()
    return round(
        float(
            df["Profit"].sum()
        ),
        2
    )
def get_total_orders():
    df = load_data()
    if "Order ID" in df.columns:
        return int(
            df["Order ID"].nunique()
        )
    return len(df)
def get_regions():
    df = load_data()
    return (
        df["Region"]
        .dropna()
        .unique()
        .tolist()
    )
def get_categories():
    df = load_data()
    return (
        df["Category"]
        .dropna()
        .unique()
        .tolist()
    )
def get_dataset_summary():
    df = load_data()
    return {
        "rows": len(df),
        "columns": list(df.columns),
        "total_sales": round(
            float(
                df["Sales"].sum()
            ),
            2
        ),
        "total_profit": round(
            float(
                df["Profit"].sum()
            ),
            2
        ),
        "total_orders": (
            int(
                df["Order ID"].nunique()
            )
            if "Order ID"
            in df.columns
            else len(df)
        ),
        "regions": (
            df["Region"]
            .dropna()
            .unique()
            .tolist()
        ),
        "categories": (
            df["Category"]
            .dropna()
            .unique()
            .tolist()
        )
    }