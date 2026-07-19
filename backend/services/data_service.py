import pandas as pd
df=pd.read_csv(".../datasets/raw/global_superstore.csv")

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