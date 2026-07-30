from fastapi import APIRouter, Depends, HTTPException

from backend.models.user import User
from backend.services import data_service
from backend.utils.auth import get_current_user

router = APIRouter()

@router.get("/sales")
def sales(
    current_user: User = Depends(get_current_user)
):
    try:
        df = data_service.get_sales_data()
        return {
            "status": "success",
            "count": len(df),
            "data": df.head(100).to_dict(
                orient="records"
            )
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch sales data: {str(e)}"
        )

@router.get("/profit")
def profit(
    current_user: User = Depends(get_current_user)
):
    try:
        df = data_service.get_profit_data()
        return {
            "status": "success",
            "count": len(df),
            "data": df.head(100).to_dict(
                orient="records"
            )
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch profit data: {str(e)}"
        )

@router.get("/orders")
def orders(
    current_user: User = Depends(get_current_user)
):
    try:
        df = data_service.get_order_data()
        return {
            "status": "success",
            "count": len(df),
            "data": df.head(100).to_dict(
                orient="records"
            )
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch order data: {str(e)}"
        )

@router.get("/regions")
def regions(
    current_user: User = Depends(get_current_user)
):
    try:
        return {
            "status": "success",
            "data": data_service.get_region_summary()
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch region data: {str(e)}"
        )

@router.get("/categories")
def categories(
    current_user: User = Depends(get_current_user)
):
    try:
        return {
            "status": "success",
            "data": data_service.get_category_summary()
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch category data: {str(e)}"
        )

@router.get("/summary")
def summary(
    current_user: User = Depends(get_current_user)
):
    try:
        return {
            "status": "success",
            "sales": data_service.get_sales_summary(),
            "profit": data_service.get_profit_summary()
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch analytics summary: {str(e)}"
        )