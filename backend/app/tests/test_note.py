from fastapi.testclient import TestClient
from unittest.mock import patch

from app.main import app

client = TestClient(app)


def test_create_note():

    payload = {
        "customer_id": 1,
        "note": "Customer is interested in the Enterprise CRM plan."
    }

    with patch("app.services.note_service.create_note") as mock_create:
        mock_create.return_value = {
            "id": 1,
            **payload
        }

        response = client.post("/notes", json=payload)

        assert response.status_code == 200
        assert response.json()["customer_id"] == 1
        assert response.json()["note"] == payload["note"]


def test_create_note_customer_not_found():

    payload = {
        "customer_id": 999,
        "note": "Interested in premium plan."
    }

    with patch("app.services.note_service.create_note") as mock_create:
        mock_create.return_value = None

        response = client.post("/notes", json=payload)

        # Change this to 200 if your API doesn't raise HTTPException
        assert response.status_code == 404
        assert response.json()["detail"] == "Customer not found"


def test_get_notes():

    with patch("app.services.note_service.get_notes_by_customer") as mock_get:
        mock_get.return_value = [
            {
                "id": 1,
                "customer_id": 1,
                "note": "Interested in CRM."
            },
            {
                "id": 2,
                "customer_id": 1,
                "note": "Requested demo next week."
            }
        ]

        response = client.get("/notes/1")

        assert response.status_code == 200
        assert len(response.json()) == 2
        assert response.json()[0]["customer_id"] == 1


def test_get_notes_empty():

    with patch("app.services.note_service.get_notes_by_customer") as mock_get:
        mock_get.return_value = []

        response = client.get("/notes/1")

        assert response.status_code == 200
        assert response.json() == []