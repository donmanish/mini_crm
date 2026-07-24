from google import genai
from sqlalchemy.orm import Session
import json
from app.core.config import settings
from . import timeline_service

client = genai.Client(api_key=settings.GEMINI_API_KEY)

def generate_customer_insights(db: Session, data):
    prompt = f"""
    You are an AI CRM Assistant.

    Analyze the customer information.

    Customer Name: {data.customer_name}
    Company: {data.company}
    Status: {data.status}

    Customer Notes:
    {chr(10).join(data.notes)}

    Return ONLY valid JSON.

    Do NOT use markdown.
    Do NOT use ```json.
    Do NOT explain anything.

    Format:

    {{
        "interest": "",
        "priority": "",
        "budget": "",
        "decision_maker": "",
        "next_step": "",
        "summary": ""
    }}

    If information is missing return "Unknown".
    """

    response = client.models.generate_content(
        model=settings.GEMINI_MODEL,
        contents=prompt,
        config={
            "response_mime_type": "application/json"
        }
    )

    timeline_service.create_timeline(
        db,
        data.customer_id,
        "AI generated customer insights"
    )

    result = json.loads(response.text)



    return result


def generate_customer_insights_test(db: Session, data):
    print(data)
    timeline_service.create_timeline(
        db,
        data.customer_id,
        "AI generated customer insights test ."
    )
    return {
  "interest": "Enterprise CRM package with Salesforce integration",
  "priority": "High",
  "budget": "$20,000 annually",
  "decision_maker": "CTO",
  "next_step": "Schedule product demo next week",
  "summary": "John Doe from Tech Solutions Pvt Ltd is interested in the Enterprise CRM package requiring Salesforce integration. Budget is $20,000 annually, the decision maker is the CTO, and a product demo has been requested for next week."
}