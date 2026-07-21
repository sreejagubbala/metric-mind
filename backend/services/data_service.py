import pandas as pd
from pathlib import Path
BASE_DIR= Path(__file__).resolve().parents[2]
DATASET_PATH= BASE_DIR/"datasets"/"raw"/"global_superstore.csv"

df=pd.read_csv(DATASET_PATH)

def get_total_sales():
    return round(df["Sales"].sum(),2)
def get_total_profit():
    return round(df["Profit"].sum(),2)
def get_total_orders():
    return len(df)
def get_regions():
    return df["Region"].unique().tolist()
def get_categories():
    return df["Category"].unique().tolist()
def dataset_summary():
    return{
        "Rows":len(df),
        "Columns":list(df.columns),
        "Total Sales":get_total_sales(),
        "Total Profit":get_total_profit(),
        "Total Orders":get_total_orders(),
        "Regions":get_regions(),
        "Categories":get_categories()
    }