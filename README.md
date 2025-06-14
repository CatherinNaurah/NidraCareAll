# ID Team : CC25 - CF149
# NidraCare
Kualitas tidur yang buruk berdampak signifikan terhadap produktivitas, kesehatan mental, dan kesejahteraan seseorang. Menurut Sari et al. (2022), sektor industri memiliki kecenderungan penurunan kualitas tidur yang berpotensi menurunkan produktivitas. Selain itu, banyak individu mengalami gangguan seperti insomnia, sleep apnea, atau pola tidur tidak teratur tanpa memahami jenis gangguannya. Chen M. et al. (2022) juga menekankan pentingnya aktivitas fisik dan positive thinking untuk menjaga kualitas tidur.

Berdasarkan permasalahan tersebut, tim kami mengembangkan NidraCare, sebuah aplikasi web berbasis Machine Learning yang memprediksi potensi gangguan tidur berdasarkan input pengguna seperti durasi tidur, gejala fisik/mental, dan gaya hidup.Aplikasi ini memanfaatkan model klasifikasi sederhana untuk mengelompokkan kondisi tidur menjadi Normal, Insomnia, atau Sleep Apnea, serta memberikan saran perbaikan pola tidur. NidraCare hadir sebagai solusi awal yang mudah diakses sebelum konsultasi medis.

## Fitur Utama 
- **Pengumpulan data input pengguna** terkait pola tidur, kondisi fisik/mental, dan gaya hidup.
- **Prediksi klasifikasi gangguan tidur** (Normal, Insomnia, Sleep Apnea) menggunakan model Machine Learning.
- **Penyajian hasil prediksi lengkap** dengan saran perbaikan kualitas tidur.
- **Antarmuka web interaktif** dan mudah digunakan.

## Struktur Repository
Repositori ini dibagi menjadi tiga bagian utama:

1. Machine Learning (ML)
Fungsi: Mengembangkan dan melatih model klasifikasi untuk mengelompokkan pola tidur ke dalam kategori gangguan tidur.
Deskripsi:
Modul ini bertanggung jawab memproses data, membangun model prediksi sederhana menggunakan algoritma klasifikasi, dan menyimpan model untuk digunakan backend.

2. Backend (BE)
Fungsi: Menangani logika aplikasi, komunikasi dengan ML model, dan API untuk frontend.
Deskripsi:
Backend ini mengelola alur data, menerima input dari frontend, mengolahnya menggunakan model ML, dan memberikan respon berupa prediksi serta saran perbaikan tidur.

3. Frontend (FE)
Fungsi: Antarmuka pengguna untuk memasukkan data, menampilkan hasil prediksi dan saran secara interaktif.
Deskripsi:
Frontend memberikan pengalaman pengguna yang mudah dan responsif, memungkinkan input data pola tidur serta menampilkan hasil analisis dan rekomendasi dari backend.

## Struktur Proyek Machine Learning 

Dalam folder 'Machine Learning NidraCare' terdiri dari beberapa file utama yang digunakan dalam proses pengemabngan dan pelatihan model machine learning untuk aplikasi NidraCare . Berikut adalah struktur dan deskripsi dari masing-masing file : 

- (FIX)_Algoritma_ML_NidraCare.ipynb

   Notebook utama berisi seluruh tahapan proses machine learning, mulai dari eksplorasi data, preprocessing, pemodelan, hingga evaluasi model. Versi ini merupakan versi akhir dari algoritma yang sudah diperbaiki.
  
- Algoritma_ML_Nidracare.py
  
  Script Python yang berisi kode program untuk implementasi model machine learning dalam format `.py`. Digunakan untuk integrasi ke backend atau deployment.

- NidraCare - ML.md
  
  Dokumen berformat Markdown yang berisi dokumentasi khusus untuk bagian machine learning, mulai dari penjelasan algoritma yang digunakan, deskripsi dataset, proses training model, serta hasil evaluasi.

- Sleep_health_and_lifestyle_data.csv
  
  Dataset utama yang digunakan dalam pengembangan model. Dataset ini berisi data pola tidur, gaya hidup, dan kondisi kesehatan pengguna.


**---Ini adalah bagian akhir laporan---**
