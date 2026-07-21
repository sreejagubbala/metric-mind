from fastapi import APIRouter
from services.data_service import *
router=APIRouter()

@router.get("/sales")
def sales():
    return{
        "Total Sales":get_total_sales()
    }
@router.get("/profit")
def profit():
    return{
        "Total Profit":get_total_profit()
    }
@router.get("/orders")
def orders():
    return{
        "Total Orders":get_total_orders()
    }
@router.get("/regions")
def regions():
    return{
        "Regions":get_regions()
    }
@router.get("/categories")
def categories():
    return{
        "Categories":get_categories()
    }