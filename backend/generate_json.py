import json
import random

positive = [
    "This product is amazing and works perfectly",
    "Very good quality and worth the price",
    "Excellent product, highly recommended",
    "Loved it, will buy again",
    "Great experience using this",
    "Very satisfied with the performance",
    "Good value for money",
    "Fantastic quality and fast delivery",
    "Nice design and easy to use",
    "Highly durable and reliable"
]

negative = [
    "Worst product ever, waste of money",
    "Fake product, do not buy",
    "Very bad quality and not worth it",
    "Completely disappointed",
    "This is a scam product",
    "Terrible experience",
    "Not as described, very poor",
    "Totally useless item",
    "Fake and misleading",
    "Horrible quality"
]

data = []

for i in range(1200):  # 1200 reviews
    if random.random() > 0.5:
        review = random.choice(positive)
    else:
        review = random.choice(negative)
    
    data.append({"review": review})

with open("reviews.json", "w") as f:
    json.dump(data, f, indent=2)

print("JSON dataset created successfully!")