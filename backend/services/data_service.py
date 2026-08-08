import pandas as pd

from backend.config import DATASET_PATH


def load_data() -> pd.DataFrame:
    if not DATASET_PATH.exists():
        raise FileNotFoundError(
            f"Dataset not found: {DATASET_PATH}"
        )

    return pd.read_csv(DATASET_PATH)


def get_sales_data():
    df = load_data()

    return {
        "total_sales": float(
            df["Sales"].sum()
        )
    }


def get_profit_data():
    df = load_data()

    return {
        "total_profit": float(
            df["Profit"].sum()
        )
    }


def get_order_data():
    df = load_data()

    if "Order ID" in df.columns:
        total_orders = df["Order ID"].nunique()
    else:
        total_orders = len(df)

    return {
        "total_orders": int(total_orders)
    }


def get_region_data():
    df = load_data()

    if "Region" not in df.columns:
        return []

    result = (
        df.groupby("Region")["Sales"]
        .sum()
        .reset_index()
    )

    result = result.rename(
        columns={
            "Sales": "sales"
        }
    )

    return result.to_dict(
        orient="records"
    )


def get_category_data():
    df = load_data()

    if "Category" not in df.columns:
        return []

    result = (
        df.groupby("Category")["Sales"]
        .sum()
        .reset_index()
    )

    result = result.rename(
        columns={
            "Sales": "sales"
        }
    )

    return result.to_dict(
        orient="records"
    )


def get_monthly_revenue():
    df = load_data()

    if "Order Date" not in df.columns:
        return []

    df["Order Date"] = pd.to_datetime(
        df["Order Date"],
        errors="coerce"
    )

    df = df.dropna(
        subset=["Order Date"]
    )

    result = (
        df.groupby(
            df["Order Date"].dt.to_period("M")
        )["Sales"]
        .sum()
        .reset_index()
    )

    result["Order Date"] = (
        result["Order Date"].astype(str)
    )

    result = result.rename(
        columns={
            "Order Date": "month",
            "Sales": "revenue"
        }
    )

    result["revenue"] = (
        result["revenue"].astype(float)
    )

    return result.to_dict(
        orient="records"
    )