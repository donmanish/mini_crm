````md id="h4ks9m"
# AI Mini CRM

AI Mini CRM is a full-stack CRM application built with **React**, **FastAPI**, **SQLite**, and **Google Gemini AI**. It allows users to manage customers, add notes, view timelines, and generate AI-powered customer insights.

---

# Setup

## Clone the Repository

```bash
git clone https://github.com/<your-username>/ai-mini-crm.git
cd ai-mini-crm
```

## Configure Environment Variables

Create a `.env` file inside the `backend` directory.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
GEMINI_MODEL=gemini-2.5-flash-lite
```

> If using the mock AI service, the Gemini API key is not required.

## Run the Application

Start all services using Docker Compose.

```bash
docker compose up --build
```

## Access the Application

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:8000 |
| Swagger Documentation | http://localhost:8000/docs |

---

# Architecture

```
                  React Frontend
                         │
                    REST API
                         │
                  FastAPI Backend
                         │
        ┌────────────────┼────────────────┐
        │                │                │
  Customer Service   Note Service    AI Service
        │                │                │
        └──────────────┬─────────────────┘
                       │
                  Timeline Service
                       │
                 SQLAlchemy ORM
                       │
                    SQLite DB
```

### Backend Architecture

- **Controllers** – Handle API requests.
- **Services** – Contain business logic.
- **Models** – SQLAlchemy database models.
- **Schemas** – Pydantic request and response validation.
- **Database** – SQLite for persistent storage.

### Frontend Architecture

- Login
- Customer List
- Customer Details
- Customer Notes
- Timeline
- AI Insights

---

# AI Prompts Used

The application sends customer details and notes to Gemini AI using the following prompt:

```text
You are an AI Sales CRM Assistant.

Analyze the customer information below.

Customer Name: {customer_name}
Company: {company}
Status: {status}

Customer Notes:
{notes}

Return the result in JSON format with the following fields:

- interest
- priority
- budget
- decision_maker
- next_step
- summary

If any information is missing, return "Unknown".
```

Expected AI response:

```json
{
  "interest": "...",
  "priority": "...",
  "budget": "...",
  "decision_maker": "...",
  "next_step": "...",
  "summary": "..."
}
```

---

# Tradeoffs

- **SQLite** was chosen for simplicity and quick local development instead of PostgreSQL.
- **Dummy authentication** is used instead of JWT to keep the project focused on CRM functionality.
- **AI insights are generated on demand**, which keeps stored data small but depends on AI availability.
- **Timeline records only key business events** (customer creation, notes, AI generation) instead of every database change.
- **Mock AI service** is available for frontend testing to avoid consuming Gemini API tokens.

---

# Known Limitations

- Dummy login (no real authentication).
- No user roles or permissions.
- No search or filtering.
- No pagination for customer lists.
- No file attachments for notes.
- SQLite is intended for development, not production.
- AI insights require a valid Gemini API key unless the mock service is used.
- AI-generated responses may vary depending on the prompt and model.
````
