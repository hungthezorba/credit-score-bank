import os;
import pandas as pd;
import lightgbm as lgb
from lightgbm import LGBMClassifier
import joblib

from flask import Flask, jsonify, request
import numpy as np
from dotenv import load_dotenv
import src.constant as constant
from werkzeug.utils import secure_filename;

# Load data
all_data = pd.read_csv("./HomeCredit/processed_all_data.csv")
all_data = all_data.set_index("Unnamed: 0")
all_column = all_data.columns.values.tolist()
bb_idx = np.loadtxt("./HomeCredit/bb_idx.csv",delimiter=",")
prev_idx = np.loadtxt("./HomeCredit/prev_idx.csv",delimiter=",")
bb_idx = bb_idx.astype(np.int64)
prev_idx = prev_idx.astype(np.int64)
ALLOWED_EXTENSIONS = set(['csv'])

# Load Model
model_case1 = joblib.load("./HomeCredit/model/model_case1/clf_case1.model")
model_general_case1 = joblib.load( "./HomeCredit/model/model_case1/clf_general_case1.model")
model_case2 = joblib.load("./HomeCredit/model/model_case2/clf_case2.model")
model_general_case2 = joblib.load("./HomeCredit/model/model_case2/clf_general_case_2.model")
model_case3 = joblib.load("./HomeCredit/model/model_case3/clf_case3.model")
model_general_case3 = joblib.load( "./HomeCredit/model/model_case3/clf_general_case_3.model")
model_case4 = joblib.load( "./HomeCredit/model/model_case4/clf_case4.model")
model_general_case4 = joblib.load( "./HomeCredit/model/model_case4/clf_general_case4.model")

# Load .env
load_dotenv()

# Initialize Flask
app = Flask(__name__)

# App health check
@app.route("/healthcheck", methods=["GET"])
def healthcheck():
  msg = "Model Server is running well at PORT"
  print(os.getenv("FLASK_APP"))
  print(constant.PROD)
  return jsonify({"message": msg})

#Model pipeline
def get_mock_request():
  data_mock_dict = {"NAME_CONTRACT_TYPE": ["Revolving loans"],
                  "CODE_GENDER": [0],
                  "AMT_INCOME_TOTAL":[202500.0],
                  "AMT_CREDIT":[406597.5],
                  "AMT_ANNUITY":[24700.5],
                  "AMT_GOODS_PRICE":[351000.0],
                  "NAME_TYPE_SUITE":["Unaccompanied"],
                  "NAME_INCOME_TYPE":["Working"],
                  "NAME_EDUCATION_TYPE":["Secondary / secondary special"],
                  "NAME_FAMILY_STATUS":["Single / not married"],
                  "NAME_HOUSING_TYPE":["House / apartment"],
                  "DAYS_BIRTH":[-9461],
                  "FLAG_MOBIL":[1],
                  "FLAG_EMP_PHONE":[1],
                  "FLAG_EMAIL":[0],
                  "OCCUPATION_TYPE":["Laborers"],
                  "SK_ID_CURR":[100002]
                  }
  return data_mock_dict                  

def preprocess(df):
  list_col_in = ["CODE_GENDER","AMT_INCOME_TOTAL","AMT_CREDIT","AMT_ANNUITY",
                "AMT_GOODS_PRICE","DAYS_BIRTH","FLAG_MOBIL","FLAG_EMP_PHONE","FLAG_EMAIL","SK_ID_CURR"]
  name_when_add_prefix = ["APP" + i for i in list_col_in]
  dict_continous = {}
  for i in range(len(list_col_in)):
    dict_continous[list_col_in[i]] =  name_when_add_prefix[i]
  contract_type = ["Cash loans","Revolving loans"]
  name_type_suite = ['Unaccompanied', 'Family', 'Spouse, partner', 'Children',
      'Other_A', 'Other_B', 'Group of people'] 
  NAME_INCOME_TYPE = ['Working', 'State servant', 'Commercial associate', 'Pensioner',
      'Unemployed', 'Student', 'Businessman', 'Maternity leave']
  NAME_EDUCATION_TYPE = ['Secondary / secondary special', 'Higher education',
      'Incomplete higher', 'Lower secondary', 'Academic degree']
  NAME_FAMILY_STATUS = ['Single / not married', 'Married', 'Civil marriage', 'Widow',
      'Separated', 'Unknown']
  NAME_HOUSING_TYPE = ['House / apartment', 'Rented apartment', 'With parents',
      'Municipal apartment', 'Office apartment', 'Co-op apartment']
  OCCUPATION_TYPE = ['Laborers', 'Core staff', 'Accountants', 'Managers',
      'Drivers', 'Sales staff', 'Cleaning staff', 'Cooking staff',
      'Private service staff', 'Medicine staff', 'Security staff',
      'High skill tech staff', 'Waiters/barmen staff',
      'Low-skill Laborers', 'Realty agents', 'Secretaries', 'IT staff',
      'HR staff']
  dict_label = {}

  name_contrast = ["APP_NAME_CONTRACT_TYPE_" + i for i in contract_type]
  for i in name_contrast:
    current_name = i.split("_")[-1]
    dict_label[current_name] = i 

  name_type_suite_n = ["APP_NAME_TYPE_SUITE_" + i for i in name_type_suite]
  for i in name_type_suite_n:
    current_name = i.split("_")[-1]
    dict_label[current_name] = i 

  name_income_type_n = ["APP_NAME_INCOME_TYPE_" + i for i in NAME_INCOME_TYPE]
  for i in name_income_type_n:
    current_name = i.split("_")[-1]
    dict_label[current_name] = i 

  name_education_type_n = ["APP_NAME_EDUCATION_TYPE_" + i for i in NAME_EDUCATION_TYPE]
  for i in name_education_type_n:
    current_name = i.split("_")[-1]
    dict_label[current_name] = i 

  name_family_status_n = ["APP_NAME_FAMILY_STATUS_" + i for i in NAME_FAMILY_STATUS]
  for i in name_family_status_n:
    current_name = i.split("_")[-1]
    dict_label[current_name] = i 

  name_housing_type_n = ["APP_NAME_HOUSING_TYPE_" + i for i in NAME_HOUSING_TYPE]
  for i in name_housing_type_n:
    current_name = i.split("_")[-1]
    dict_label[current_name] = i 

  name_occupation_type_n = ["APP_OCCUPATION_TYPE_" + i for i in OCCUPATION_TYPE]
  for i in name_occupation_type_n:
    current_name = i.split("_")[-1]
    dict_label[current_name] = i 

  name_when_add_prefix.extend(name_contrast)
  name_when_add_prefix.extend(name_type_suite_n)
  name_when_add_prefix.extend(name_income_type_n)
  name_when_add_prefix.extend(name_education_type_n)
  name_when_add_prefix.extend(name_family_status_n)
  name_when_add_prefix.extend(name_housing_type_n)
  name_when_add_prefix.extend(name_occupation_type_n)

  prev_data = rebuild_form(df, dict_label=dict_label, dict_continous=dict_continous)
  current_case = filter_case(prev_data, bb_idx, prev_idx)
  print(prev_data, current_case)
  return prev_data, current_case


# Rebuild Form Def Pre-process
def rebuild_form(df_in, dict_label, dict_continous):
  id_to_search =   df_in.SK_ID_CURR[0]
  if id_to_search in all_data.SK_ID_CURR:
    prev_data = all_data[all_data.SK_ID_CURR == id_to_search]
  else : 
    dict_data = {}
    for i in all_data.columns.to_numpy().tolist():
      dict_data[i] = [np.nan] 
    prev_data = pd.DataFrame(data=dict_data)
  
  for col in df_in.columns.to_numpy().tolist():
    value = df_in[col][0]
    if value in list(dict_label.keys()):
      prev_data[dict_label[value]] = 1
    elif value != np.nan:
      prev_data[dict_continous[col]] = value

  return prev_data

# Filter case for model
def filter_case(prev_data,bb_idx,prev_idx):
  prev = False 
  bb = False 
  if prev_data["SK_ID_CURR"][0] in bb_idx:
    bb = True 
  if prev_data["SK_ID_CURR"][0] in prev_idx:
    prev = True 
  if prev and bb:
    return 4
  if prev:
    return 2
  if bb: 
    return 3
  return 1

# Retrieve features
def get_feat(prefix_list,feats_list):
  return_feats = []
  for i in feats_list:
    prefix = i.split("_")[0]
    if prefix in prefix_list:
      return_feats.append(i)
  return return_feats

# Fix Predict
def fix_predict(model_case,model_general,data,feat_case,feats):
  swap_general = False
  pred_general = model_general.predict(data[feats])
  pred_proba_general = model_general.predict_proba(data[feats])
  if pred_general == 1 and np.argmax(pred_proba_general) == 0:
    swap_general = True
  elif pred_general == 0 and np.argmax(pred_proba_general) == 1:
    swap_general = True 

  swap_custom = False
  pred_custom = model_case.predict(data[feat_case])
  pred_proba_custom = model_case.predict_proba(data[feat_case])
  if pred_custom == 1 and np.argmax(pred_proba_custom) == 0:
    swap_custom = True
  elif pred_custom == 0 and np.argmax(pred_proba_custom) == 1:
    swap_custom = True 

  return_proba = np.zeros(2)
  if swap_general:
    return_proba += pred_proba_general[::-1]/2
  else :
    return_proba += pred_proba_general[0]/2
  
  if swap_custom:
    return_proba += pred_proba_custom[::-1]/2
  else:
    return_proba += pred_proba_custom[0]/2

  return return_proba 

# Predict by case
def get_predictbycase(data,case, all_column):
  feats = [f for f in all_column if f not in ['TARGET', 'SK_ID_CURR']]
  model_case = model_case4
  model_general = model_general_case4
  custom_feats = feats
  if case == 1:
    custom_feats = get_feat(["APP"],feats)
    model_case = model_case1
    model_general = model_general_case1
  if case == 2:
    model_case = model_case2
    model_general = model_general_case2
  if case == 3:
    custom_feats = get_feat(["APP","BB"],all_column)
    model_case = model_case3
    model_general = model_general_case3

  return_proba = fix_predict(model_case= model_case,model_general= model_general,data = data,feat_case=custom_feats,feats= feats)

  return return_proba 

#Album form
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/predict", methods=["GET", "POST"])
def predict():
  if request.method == "POST":
    print("POST method called")
    file = request.files['file']
    if file and allowed_file(file.filename):
      filename = secure_filename(file.filename)
      # Snippet to read file
      file.stream.seek(0) # Seek to the beginning of file
      df = pd.read_csv(file)
      preprocess_data, case = preprocess(df)
      print("Case:", case)
      result = get_predictbycase(preprocess_data, case, all_column=all_column)
      result_list = np.ndarray.tolist(result)
      return jsonify({"prediction": result_list})  
  elif request.method == "GET":
    request_data = get_mock_request()
    df_mock = pd.DataFrame(data=request_data)
    preprocess_data, case = preprocess(df_mock)
    print("Case:", case)
    result = get_predictbycase(preprocess_data, case, all_column=all_column)
    result_list = np.ndarray.tolist(result)
    return jsonify({"prediction": result_list})
    # print("GET Method Called")
  return 0

# Execute Flask App
if __name__ == "__main__":
  app.run(host=os.getenv("HOST"), port=os.getenv("PORT"), debug=not constant.PROD)
