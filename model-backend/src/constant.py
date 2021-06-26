from dotenv import load_dotenv
import os
load_dotenv()

PROD = os.getenv("FLASK_ENV") is "production"