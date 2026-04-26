# import pandas as pd
# import re
# import string
# import pickle

# from sklearn.model_selection import train_test_split
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.svm import LinearSVC
# from sklearn.metrics import accuracy_score

# # -----------------------------
# # TEXT CLEANING FUNCTION
# # -----------------------------
# def clean_text(text):
#     text = text.lower()
#     text = re.sub(r'\d+', '', text)  # remove numbers
#     text = text.translate(str.maketrans('', '', string.punctuation))  # remove punctuation
#     return text

# # -----------------------------
# # LOAD DATASET
# # -----------------------------
# data = pd.read_csv("reviews.csv")

# # Clean text
# data['review'] = data['review'].apply(clean_text)

# X = data['review']
# y = data['label']

# # -----------------------------
# # SPLIT DATA
# # -----------------------------
# X_train, X_test, y_train, y_test = train_test_split(
#     X, y, test_size=0.2, random_state=42
# )

# # -----------------------------
# # TF-IDF (Improved)
# # -----------------------------
# vectorizer = TfidfVectorizer(
#     stop_words='english',
#     max_features=5000,
#     ngram_range=(1, 2)   # uni + bi-grams
# )

# X_train_vec = vectorizer.fit_transform(X_train)
# X_test_vec = vectorizer.transform(X_test)

# # -----------------------------
# # MODEL (SVM - BEST FOR TEXT)
# # -----------------------------
# model = LinearSVC()
# model.fit(X_train_vec, y_train)

# # -----------------------------
# # EVALUATE
# # -----------------------------
# y_pred = model.predict(X_test_vec)
# accuracy = accuracy_score(y_test, y_pred)

# print(f"Model Accuracy: {accuracy * 100:.2f}%")

# # -----------------------------
# # SAVE MODEL
# # -----------------------------
# pickle.dump(model, open("model.pkl", "wb"))
# pickle.dump(vectorizer, open("vectorizer.pkl", "wb"))

# print("Model trained and saved successfully!")



import pandas as pd
import re
import string
import pickle

from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression   # ✅ CHANGED
from sklearn.metrics import accuracy_score

# -----------------------------
# TEXT CLEANING FUNCTION
# -----------------------------
def clean_text(text):
    text = text.lower()
    text = re.sub(r'\d+', '', text)
    text = text.translate(str.maketrans('', '', string.punctuation))
    return text

# -----------------------------
# LOAD DATASET
# -----------------------------
data = pd.read_csv("reviews.csv")

data['review'] = data['review'].apply(clean_text)

X = data['review']
y = data['label']

# -----------------------------
# SPLIT DATA
# -----------------------------
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# -----------------------------
# TF-IDF
# -----------------------------
vectorizer = TfidfVectorizer(
    stop_words='english',
    max_features=5000,
    ngram_range=(1, 2)
)

X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# -----------------------------
# MODEL (LOGISTIC REGRESSION)
# -----------------------------
model = LogisticRegression(max_iter=1000)   # ✅ CHANGED
model.fit(X_train_vec, y_train)

# -----------------------------
# EVALUATE
# -----------------------------
y_pred = model.predict(X_test_vec)
accuracy = accuracy_score(y_test, y_pred)

print(f"Model Accuracy: {accuracy * 100:.2f}%")

# -----------------------------
# SAVE MODEL
# -----------------------------
pickle.dump(model, open("model.pkl", "wb"))
pickle.dump(vectorizer, open("vectorizer.pkl", "wb"))

print("Model trained and saved successfully!")