from fastapi.testclient import TestClient
from unittest.mock import patch

from app.main import app

client = TestClient(app)


def test_create_customer():

    payload = {
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "9876543210",
        "company": "ABC Pvt Ltd",
        "designation": "Manager",
        "status": "Lead"
    }

    with patch("app.services.customer_service.create_customer") as mock_create:
        mock_create.return_value = {
            "id": 1,
            **payload
        }

        response = client.post("/customers", json=payload)

        assert response.status_code == 200
        assert response.json()["name"] == "John Doe"


def test_get_customers():

    with patch("app.services.customer_service.get_customers") as mock_get:
        mock_get.return_value = [
            {
                "id": 1,
                "name": "John Doe",
                "email": "john@example.com",
                "phone": "9876543210",
                "company": "ABC Pvt Ltd",
                "designation": "Manager",
                "status": "Lead"
            }
        ]

        response = client.get("/customers")

        assert response.status_code == 200
        assert len(response.json()) == 1


def test_get_customer():

    with patch("app.services.customer_service.get_customer") as mock_get:
        mock_get.return_value = {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "phone": "9876543210",
            "company": "ABC Pvt Ltd",
            "designation": "Manager",
            "status": "Lead"
        }

        response = client.get("/customer/1")

        assert response.status_code == 200
        assert response.json()["id"] == 1


def test_get_customer_not_found():

    with patch("app.services.customer_service.get_customer") as mock_get:
        mock_get.return_value = None

        response = client.get("/customer/999")

        assert response.status_code == 404
        assert response.json()["detail"] == "Customer not found"


def test_update_customer():

    payload = {
        "name": "John Updated",
        "email": "john@example.com",
        "phone": "9876543210",
        "company": "ABC Pvt Ltd",
        "designation": "Senior Manager",
        "status": "Customer"
    }

    with patch("app.services.customer_service.update_customer") as mock_update:
        mock_update.return_value = {
            "id": 1,
            **payload
        }

        response = client.put("/customer/1", json=payload)

        assert response.status_code == 200
        assert response.json()["name"] == "John Updated"


def test_update_customer_not_found():

    payload = {
        "name": "John Updated",
        "email": "john@example.com",
        "phone": "9876543210",
        "company": "ABC Pvt Ltd",
        "designation": "Senior Manager",
        "status": "Customer"
    }

    with patch("app.services.customer_service.update_customer") as mock_update:
        mock_update.return_value = None

        response = client.put("/customer/999", json=payload)

        assert response.status_code == 404
        assert response.json()["detail"] == "Customer not found"


def test_delete_customer():

    with patch("app.services.customer_service.delete_customer") as mock_delete:
        mock_delete.return_value = {
            "message": "Customer deleted successfully"
        }

        response = client.delete("/customer/1")

        assert response.status_code == 200
        assert response.json()["message"] == "Customer deleted successfully"


def test_delete_customer_not_found():

    with patch("app.services.customer_service.delete_customer") as mock_delete:
        mock_delete.return_value = None

        response = client.delete("/customer/999")

        assert response.status_code == 404
        assert response.json()["detail"] == "Customer not found"