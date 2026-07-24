from fastapi.testclient import TestClient
from unittest.mock import patch

from app.main import app

client = TestClient(app)


def test_generate_customer_insights():

    payload = {
        "customer_name": "John Doe",
        "company": "ABC Pvt Ltd",
        "status": "Lead",
        "notes": [
            "Interested in CRM",
            "Requested Demo"
        ]
    }

    with patch("app.controller.ai.generate_customer_insights") as mock_ai:

        mock_ai.return_value = {
            "result": "Customer is highly interested in Enterprise CRM."
        }

        response = client.post(
            "/ai/customer-insights",
            json=payload
        )

        assert response.status_code == 200
        assert "result" in response.json()
        assert response.json()["result"] == "Customer is highly interested in Enterprise CRM."

def test_ai_empty_notes():

    payload = {
        "customer_name": "John Doe",
        "company": "ABC Pvt Ltd",
        "status": "Lead",
        "notes": []
    }

    with patch("app.controller.ai.generate_customer_insights") as mock_ai:

        mock_ai.return_value = {
            "result": "No customer notes available."
        }

        response = client.post(
            "/ai/customer-insights",
            json=payload
        )

        assert response.status_code == 200
        assert response.json()["result"] == "No customer notes available."


def test_ai_invalid_request():

    payload = {
        "customer_name": "John"
    }

    response = client.post(
        "/ai/customer-insights",
        json=payload
    )

    assert response.status_code == 422


def test_ai_service_called_once():

    payload = {
        "customer_name": "John Doe",
        "company": "ABC Pvt Ltd",
        "status": "Lead",
        "notes": [
            "Interested in CRM"
        ]
    }

    with patch("app.controller.ai.generate_customer_insights") as mock_ai:

        mock_ai.return_value = {
            "result": "Customer interested in CRM."
        }

        response = client.post(
            "/ai/customer-insights",
            json=payload
        )

        assert response.status_code == 200
        mock_ai.assert_called_once()