from pathlib import Path
import pandas as pd

BASE_DIR = Path(__file__).resolve().parent.parent.parent

DATASET_PATH = (
    BASE_DIR
    / "datasets"
    / "raw"
    / "global_superstore.csv"
)

def load_data():
    if not DATASET_PATH.exists():
        raise FileNotFoundError(
            f"Dataset not found at: {DATASET_PATH}"
        )
    return pd.read_csv(DATASET_PATH)

def get_sales_data():
    df = load_data()
    columns = [
        column
        for column in [
            "Order Date",
            "Sales",
            "Region",
            "Category",
            "Country"
        ]
        if column in df.columns
    ]
    return df[columns]

def get_profit_data():
    df = load_data()
    columns = [
        column
        for column in [
            "Order Date",
            "Profit",
            "Region",
            "Category"
        ]
        if column in df.columns
    ]
    return df[columns]

def get_order_data():
    df = load_data()
    columns = [
        column
        for column in [
            "Order ID",
            "Order Date",
            "Sales",
            "Profit",
            "Region",
            "Category"
        ]
        if column in df.columns
    ]
    return df[columns]

def get_region_summary():
    df = load_data()
    if "Region" not in df.columns:
        return []
    result = (
        df.groupby("Region")
        .agg(
            sales=("Sales", "sum"),
            profit=("Profit", "sum")
        )
        .reset_index()
    )
    return result.to_dict(
        orient="records"
    )

def get_category_summary():
    df = load_data()
    if "Category" not in df.columns:
        return []
    result = (
        df.groupby("Category")
        .agg(
            sales=("Sales", "sum"),
            profit=("Profit", "sum")
        )
        .reset_index()
    )
    return result.to_dict(
        orient="records"
    )

def get_sales_summary():
    df = load_data()
    return {
        "total_sales": float(df["Sales"].sum()),
        "average_sales": float(df["Sales"].mean()),
        "records": len(df)
    }

def get_profit_summary():
    df = load_data()
    return {
        "total_profit": float(df["Profit"].sum()),
        "average_profit": float(df["Profit"].mean()),
        "records": len(df)
    }
