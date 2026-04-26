# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pandas as pd
# import pickle

# app = Flask(__name__)
# CORS(app)

# # -------------------------------
# # LOAD MODEL
# # -------------------------------
# model = pickle.load(open("model.pkl", "rb"))
# vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

# @app.route("/")
# def home():
#     return "Fake Review Detection API Running"

# # -------------------------------
# # SINGLE REVIEW
# # -------------------------------
# @app.route("/analyze", methods=["POST"])
# def analyze():
#     data = request.json
#     review = data.get("review")

#     if not review:
#         return jsonify({"error": "No review provided"}), 400

#     vec = vectorizer.transform([review])

#     prediction = model.predict(vec)[0]
#     score = model.decision_function(vec)[0]

#     confidence = abs(score)
#     confidence = min(confidence, 1)

#     return jsonify({
#         "prediction": "Fake" if prediction == 1 else "Genuine",
#         "confidence": round(confidence, 2)
#     })

# # -------------------------------
# # CSV UPLOAD
# # -------------------------------
# @app.route("/upload", methods=["POST"])
# def upload():
#     file = request.files["file"]

#     df = pd.read_csv(file)

#     if "review" not in df.columns:
#         return jsonify({"error": "CSV must contain 'review' column"}), 400

#     vec = vectorizer.transform(df["review"])

#     predictions = model.predict(vec)
#     scores = model.decision_function(vec)

#     results = []

#     for i in range(len(df)):
#         confidence = abs(scores[i])
#         confidence = min(confidence, 1)

#         results.append({
#             "review": df["review"][i],
#             "prediction": "Fake" if predictions[i] == 1 else "Genuine",
#             "confidence": round(confidence, 2)
#         })

#     return jsonify(results)

# # -------------------------------
# # RUN SERVER
# # -------------------------------
# if __name__ == "__main__":
#     app.run(debug=True)


from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import pickle

app = Flask(__name__)
CORS(app)

# -------------------------------
# LOAD MODEL
# -------------------------------
model = pickle.load(open("model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    review = data.get("review")

    if not review:
        return jsonify({"error": "No review provided"}), 400

    vec = vectorizer.transform([review])

    prediction = model.predict(vec)[0]
    proba = model.predict_proba(vec)[0]

    return jsonify({
        "prediction": "Fake" if prediction == 1 else "Genuine",
        "confidence": round(float(max(proba)), 2)
    })
    
    
@app.route("/upload", methods=["POST"])
def upload():
    file = request.files["file"]

    df = pd.read_csv(file)

    if "review" not in df.columns:
        return jsonify({"error": "CSV must contain 'review' column"}), 400

    vec = vectorizer.transform(df["review"])

    predictions = model.predict(vec)
    proba = model.predict_proba(vec)
    results = []

    for i in range(len(df)):
        confidence = max(proba[i])

        results.append({
            "review": df["review"][i],
            "prediction": "Fake" if predictions[i] == 1 else "Genuine",
            "confidence": round(float(confidence), 2)
        })
    return jsonify(results)

# -------------------------------
# RUN SERVER
# -------------------------------
if __name__ == "__main__":
    app.run(debug=True)