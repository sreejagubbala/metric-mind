from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_home():
    response = client.get("/")
    assert response.status_code == 200

def test_health():
    response = client.get("/health/")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "running"

def test_integration_status():
    response = client.get("/integration/status")
    assert response.status_code == 200

def test_login():
    response = client.post(
        "/auth/login",
        data={
            "username": "admin",
            "password": "admin123"
        }
    )
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"

def test_invalid_login():
    response = client.post(
        "/auth/login",
        data={
            "username": "wrong",
            "password": "wrong"
        }
    )
    assert response.status_code == 401

def test_sales():
    response = client.get("/analytics/sales")
    assert response.status_code == 200
    data = response.json()
    assert "total_sales" in data

def test_profit():
    response = client.get("/analytics/profit")
    assert response.status_code == 200
    data = response.json()
    assert "total_profit" in data

def test_orders():
    response = client.get("/analytics/orders")
    assert response.status_code == 200
    data = response.json()
    assert "total_orders" in data

def test_regions():
    response = client.get("/analytics/regions")
    assert response.status_code == 200
    data = response.json()
    assert "regions" in data

def test_categories():
    response = client.get("/analytics/categories")
    assert response.status_code == 200
    data = response.json()
    assert "categories" in data