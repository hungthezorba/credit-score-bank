import os;
import pickle;
import pandas as pd;

from flask import Flask, jsonify, request
import numpy as np
import ast

# Initialize Flask
app = Flask(__name__)

# App health check
@app.route("/healthcheck", methods=["GET"])
def healthcheck():
  msg = "Server is running well!"
  return jsonify({"message": msg})

# Execute Flask App
if __name__ == "__main__":
  app.run(debug=True)
