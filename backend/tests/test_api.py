from fastapi.testclient import TestClient

from backend.main import app

client = TestClient(app)

TEST_USER = {
    "username": "testuser",
    "email": "testuser@example.com",
    "password": "Test@12345"
}

def create_test_user():
    """
    Create the test user.
    Ignore the request if the user already exists.
    """
    client.post(
        "/users/",
        json=TEST_USER
    )

def get_token():
    """
    Login and return JWT token.
    """
    create_test_user()
    response = client.post(
        "/auth/login",
        data={
            "username": TEST_USER["username"],
            "password": TEST_USER["password"]
        }
    )
    assert response.status_code == 200
    return response.json()["access_token"]

def auth_header():
    token = get_token()
    return {
        "Authorization": f"Bearer {token}"
    }
# ------------------------
# Public APIs
# ------------------------

def test_home():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json()["project"] == "MetricMind"

def test_health():
    response = client.get("/health")
    assert response.status_code == 200

def test_register_user():
    response = client.post(
        "/users/",
        json={
            "username": "newuser",
            "email": "newuser@example.com",
            "password": "Password123"
        }
    )
    assert response.status_code in [200, 400]

def test_login():
    create_test_user()
    response = client.post(
        "/auth/login",
        data={
            "username": TEST_USER["username"],
            "password": TEST_USER["password"]
        }
    )
    assert response.status_code == 200
    assert "access_token" in response.json()

def test_invalid_login():
    response = client.post(
        "/auth/login",
        data={
            "username": "wrong",
            "password": "wrong"
        }
    )
    assert response.status_code == 401
# ------------------------
# Protected APIs
# ------------------------

def test_profile():
    response = client.get(
        "/users/me",
        headers=auth_header()
    )
    assert response.status_code == 200
    assert response.json()["username"] == TEST_USER["username"]

def test_sales():
    response = client.get(
        "/analytics/sales",
        headers=auth_header()
    )
    assert response.status_code == 200

def test_profit():
    response = client.get(
        "/analytics/profit",
        headers=auth_header()
    )
    assert response.status_code == 200

def test_orders():
    response = client.get(
        "/analytics/orders",
        headers=auth_header()
    )
    assert response.status_code == 200

def test_regions():
    response = client.get(
        "/analytics/regions",
        headers=auth_header()
    )
    assert response.status_code == 200

def test_categories():
    response = client.get(
        "/analytics/categories",
        headers=auth_header()
    )
    assert response.status_code == 200

def test_summary():
    response = client.get(
        "/summary/",
        headers=auth_header()
    )
    assert response.status_code == 200

def test_integration():
    response = client.get(
        "/integration/status",
        headers=auth_header()
    )
    assert response.status_code == 200