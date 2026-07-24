from dotenv import load_dotenv
import os

load_dotenv()

class Settings:
    DATABASE_URL = os.getenv("DATABASE_URL")
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
    GEMINI_MODEL= os.getenv("GEMINI_MODEL")
    SECRET_KEY = os.getenv("SECRET_KEY")
    USE_MOCK_AI=os.getenv("USE_MOCK_AI")

settings = Settings()