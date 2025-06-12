---
title: Sleep Disorder Prediction API
emoji: 💤
colorFrom: indigo
colorTo: blue
sdk: docker
pinned: false
---

# Sleep Disorder Prediction API

A FastAPI backend serving a TensorFlow model for predicting sleep disorders

## 🛣️ API Endpoints

### `POST https://aldorev-ml-model-nidracare.hf.space/predict`
Predicts sleep disorder class from input features.

**Request JSON:**
```json
{
    "user_id": 1,
    "gender": "female",
    "age": 22,
    "sleep_duration": 8.0,
    "physical_activity_duration": 90,
    "stress_level": 2,
    "bmi_category": "normal",
    "steps_per_day": 12000,
    "sleep_quality": 9
}
```

**Response JSON:**
```json
{
  "prediction": [0.1, 0.3, 0.6],
  "predicted_class": "Insomnia",
  "confidence": 0.6
}
```

---

### `GET https://aldorev-ml-model-nidracare.hf.space/model/info`
Returns information about the loaded model.

**Response:**
```json
{
  "input_shape": [null, 8],
  "output_shape": [null, 3],
  "layers": ["dense", "dense_1", ...]
}
```

---

## 📥 Input Parameters

- `user_id`: User ID (int)
- `gender`: "male" or "female"
- `age`: Age (int)
- `sleep_duration`: Sleep duration in hours (float)
- `sleep_quality`: Sleep quality (int)
- `physical_activity_duration`: Physical activity duration in minutes (int)
- `stress_level`: Stress level (int)
- `bmi_category`: "normal", "normal weight", "obese", or "overweight"
- `steps_per_day`: Steps per day (int)

---

## 🏷️ Output Classes

- `"Normal"`
- `"Sleep Apnea"`
- `"Insomnia"`

## 🗄️ Database

- Uses PostgreSQL (asyncpg) for storing predictions.
- Tables: `users`, `predictions` (see `models.py`).

---

## 🧩 Model & Scaler Files

- `sleep_disorder_prediction_model.h5` — Keras model file
- `scaler.save` — Preprocessing scaler (joblib)

## Folder Structure
```
└── 📁ml-model-nidracare                    
    ├── 📁__pycache__                       # Direktori untuk file cache bytecode Python (dihasilkan otomatis).
    └── 📁.github                           # Konfigurasi workflow GitHub Actions.
        └── 📁workflows                     # Folder berisi definisi workflow GitHub Actions.
            ├── check-file-size.yml         # Workflow untuk memeriksa ukuran file besar dalam pull request.
            └── sync-to-hf.yml              # Workflow untuk menyinkronkan repositori dengan Hugging Face Hub.
    ├── Dockerfile                          # Mendefinisikan citra Docker untuk aplikasi.
    ├── index.html                          # Dokumentasi HTML untuk endpoint API.
    ├── main.py                             # Aplikasi utama FastAPI untuk prediksi dan penyajian model.
    ├── models.py                           # Mendefinisikan model SQLAlchemy untuk interaksi database (pengguna dan prediksi).
    ├── README.md                           # Menyediakan gambaran umum dan instruksi penggunaan untuk API model ML.
    ├── requirements.txt                    # Mencantumkan dependensi Python yang diperlukan untuk proyek.
    ├── scaler.save                         # Scaler scikit-learn yang disimpan untuk pra-pemrosesan data.
    └── sleep_disorder_prediction_model.h5  # Model Keras yang sudah dilatih sebelumnya untuk prediksi gangguan tidur.
```
