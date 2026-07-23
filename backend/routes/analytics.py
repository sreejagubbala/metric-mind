from fastapi import APIRouter
from services.data_service import (
    get_total_sales,
    get_total_profit,
    get_total_orders,
    get_regions,
    get_categories
)
router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)

@router.get("/sales")
def sales():
    return {
        "total_sales": get_total_sales()
    }
@router.get("/profit")
def profit():
    return {
        "total_profit": get_total_profit()
    }
@router.get("/orders")
def orders():
    return {
        "total_orders": get_total_orders()
    }
@router.get("/regions")
def regions():
    return {
        "regions": get_regions()
    }
@router.get("/categories")
def categories():
    return {
        "categories": get_categories()
    }