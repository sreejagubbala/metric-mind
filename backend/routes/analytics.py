from fastapi import APIRouter

from backend.services.data_service import (
    get_category_data,
    get_monthly_revenue,
    get_order_data,
    get_profit_data,
    get_region_data,
    get_sales_data
)


router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)


@router.get("/sales")
def sales():
    return get_sales_data()


@router.get("/profit")
def profit():
    return get_profit_data()


@router.get("/orders")
def orders():
    return get_order_data()


@router.get("/regions")
def regions():
    return get_region_data()


@router.get("/categories")
def categories():
    return get_category_data()


@router.get("/monthly-revenue")
def monthly_revenue():
    return get_monthly_revenue()