from fastapi import APIRouter

from backend.services.data_service import (
    get_order_data,
    get_profit_data,
    get_sales_data
)


router = APIRouter(
    prefix="/summary",
    tags=["Summary"]
)


@router.get("/")
def get_summary():
    sales = get_sales_data()
    profit = get_profit_data()
    orders = get_order_data()

    return {
        "total_sales": sales["total_sales"],
        "total_profit": profit["total_profit"],
        "total_orders": orders["total_orders"]
    }