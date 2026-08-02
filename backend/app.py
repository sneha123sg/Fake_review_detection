from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import pickle

app = Flask(__name__)
CORS(app)

# LOAD MODELS
lr_model = pickle.load(open("lr_model.pkl", "rb"))
nb_model = pickle.load(open("nb_model.pkl", "rb"))
rf_model = pickle.load(open("rf_model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

# HELPER FUNCTION (BEST MODEL)
def get_best_prediction(vec):
    # Logistic Regression
    lr_pred = lr_model.predict(vec)[0]
    lr_proba = max(lr_model.predict_proba(vec)[0])

    # Naive Bayes
    nb_pred = nb_model.predict(vec)[0]
    nb_proba = max(nb_model.predict_proba(vec)[0])

    # Random Forest
    rf_pred = rf_model.predict(vec)[0]
    rf_proba = max(rf_model.predict_proba(vec)[0])

    # Choose best model (highest confidence)
    best_conf = max(lr_proba, nb_proba, rf_proba)

    if best_conf == lr_proba:
        final_pred = lr_pred
    elif best_conf == nb_proba:
        final_pred = nb_pred
    else:
        final_pred = rf_pred

    return {
        "prediction": "Fake" if final_pred == 1 else "Genuine",
        "confidence": round(float(best_conf), 2)
    }

# SINGLE REVIEW
@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    review = data.get("review")

    if not review:
        return jsonify({"error": "No review provided"}), 400

    vec = vectorizer.transform([review])

    result = get_best_prediction(vec)

    return jsonify(result)

# CSV UPLOAD ONLY
@app.route("/upload", methods=["POST"])
def upload():
    file = request.files.get("file")
    if not file:
        return jsonify({"error": "No file uploaded"}), 400
    # Ensure CSV only
    if not file.filename.endswith(".csv"):
        return jsonify({"error": "Only CSV files are allowed"}), 400

    df = pd.read_csv(file)

    if "review" not in df.columns:
        return jsonify({"error": "CSV must contain 'review' column"}), 400

    results = []

    for review in df["review"]:
        vec = vectorizer.transform([str(review)])
        result = get_best_prediction(vec)

        results.append({
            "review": review,
            "prediction": result["prediction"],
            "confidence": result["confidence"]
        })

    return jsonify(results)

# RUN SERVER
if __name__ == "__main__":
    app.run(debug=True)