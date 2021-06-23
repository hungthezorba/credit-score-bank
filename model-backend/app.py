import os;
import pickle;
import pandas as pd;

from flask import Flask, jsonify, request
import numpy as np
import ast
from dotenv import load_dotenv
import src.constant as constant;

# Load .env
load_dotenv()

# Initialize Flask
app = Flask(__name__)


# App health check
@app.route("/healthcheck", methods=["GET"])
def healthcheck():
  msg = "ModelServer is running well at PORT"
  print(os.getenv("FLASK_APP"))
  print(constant.PROD)
  return jsonify({"message": msg})

# Execute Flask App
if __name__ == "__main__":
  app.run(host=os.getenv("HOST"),port=os.getenv("PORT"),debug=not constant.PROD)
