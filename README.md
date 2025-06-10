# ID Team : CC25 - CF149
# NidraCare
NidraCare adalah aplikasi web berbasis Machine Learning yang dirancang untuk membantu pengguna memprediksi potensi gangguan tidur berdasarkan data input seperti durasi tidur, gejala fisik/mental, dan gaya hidup. Aplikasi ini bertujuan meningkatkan kesadaran dan kualitas tidur pengguna sebelum mereka melakukan konsultasi medis.

## Latar Belakang
Tidur adalah satu kebutuhan yang sangat berpengaruh dalam kualitas hidup manusia terutama dalam jangka panjang. Kualitas tidur yang buruk tentunya akan mengakibatkan menurunnya kualitas hidup seseorang baik dalam segi produktivitas, kesehatan mental dan banyak hal lainnya. Berdasarkan penelitian oleh Sari et al. (2022) pada sektor industri berpotensi besar menunjukkan kecenderungan penurunan kualitas tidur serta menurunkan produktivitas. Banyak orang mengalami gejala tidur seperti insomnia, sleep apnea, atau pola tidur tidak teratur tanpa menyadari jenis gangguan yang dialaminya atau cara menanganinya. Berdasarkan penelitian oleh Chen M, et al. (2022) bahwa integrasi kegiatan fisik dan mempertahankan positive thinking penting dalam menjaga kualitas tidur. 
Berdasarkan masalah tersebut, tim kami mengembangkan sebuah web aplikasi berbasis Machine Learning yang dapat memprediksi potensi gangguan tidur berdasarkan input data pengguna, seperti durasi tidur, gejala fisik atau mental yang dirasakan, dan gaya hidup sehari-hari. Dengan mengadopsi design thinking, kami melakukan pemetaan kebutuhan pengguna, lalu merancang solusi yang berbasis data sebagai langkah awal untuk mengenali kondisi tidurnya sebelum berkonsultasi dengan medis. Kami menggunakan model klasifikasi sederhana untuk mengelompokkan pola tidur pengguna ke dalam kategori kondisi normal, insomnia, atau sleep apnea. Pengguna cukup mengakses web aplikasi, mengisi formulir, kemudian data akan diproses dan memberikan prediksi gangguan tidur serta saran untuk memperbaikinya.

Mengapa masalah ini harus diselesaikan:
- Dampak Kesehatan yang Serius: Gangguan tidur yang tidak terdiagnosis dapat menyebabkan komplikasi kesehatan jangka panjang seperti hipertensi, stroke, dan depresi.
- Keterbatasan Akses Diagnosis: Banyak orang tidak memiliki akses mudah ke sleep clinic atau spesialis tidur untuk diagnosis yang tepat.
- Deteksi Dini: Sistem prediksi otomatis dapat membantu identifikasi risiko gangguan tidur berdasarkan gaya hidup dan karakteristik individu.
- Efisiensi Biaya: Prediksi berbasis machine learning dapat mengurangi biaya diagnosis dan meningkatkan efisiensi sistem kesehatan.

Daftar Referensi : 
- Chen, et al. (2020). "The Impact of Physical Activity on Sleep Quality." Journal of Sleep Research, 29(3),1-10.
- Sari, et al. (2022). "Kualitas Tidur dan Produktivitas Kerja di Sektor Industri." Jurnal Manajemen dan Bisnis,21(1), 89-97.

Fitur Utama
Pengumpulan data input pengguna terkait pola tidur dan gaya hidup.

Prediksi klasifikasi gangguan tidur (Normal, Insomnia, Sleep Apnea) menggunakan model Machine Learning.

Penyajian hasil prediksi lengkap dengan saran perbaikan kualitas tidur.

Antarmuka web interaktif dan mudah digunakan.

Struktur Repository
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

## Business Understanding

Pada bagian ini, dijelaskan proses klarifikasi masalah untuk pengembangan sistem prediksi gangguan tidur NidraCare.

Bagian laporan ini mencakup:

### Problem Statements

Berdasarkan analisis domain proyek, terdapat beberapa permasalahan utama yang perlu diselesaikan:

- Kesulitan Deteksi Dini Gangguan Tidur: Banyak individu yang mengalami gangguan tidur tidak menyadari kondisinya hingga mencapai tahap yang parah, sehingga diperlukan sistem yang dapat memprediksi risiko gangguan tidur berdasarkan faktor-faktor lifestyle dan karakteristik personal.
- Keterbatasan Akses ke Profesional Kesehatan: Tidak semua orang memiliki akses mudah ke sleep clinic atau spesialis tidur untuk mendapatkan diagnosis yang tepat, sehingga diperlukan alternatif screening awal yang dapat diakses secara luas.
- Kompleksitas Faktor Penyebab: Gangguan tidur dipengaruhi oleh berbagai faktor seperti usia, gender, aktivitas fisik, tingkat stress, dan BMI, sehingga diperlukan model yang dapat menganalisis hubungan kompleks antar variabel tersebut.

### Goals

Berdasarkan problem statements di atas, tujuan dari proyek ini adalah:

- Mengembangkan Model Prediksi Akurat: Membangun model machine learning yang dapat memprediksi jenis gangguan tidur (Normal, Sleep Apnea, Insomnia) berdasarkan karakteristik personal dan gaya hidup dengan tingkat akurasi tinggi.
- Menyediakan Sistem Screening Awal: Menciptakan sistem yang dapat digunakan sebagai alat screening awal untuk mengidentifikasi individu yang berisiko mengalami gangguan tidur, sehingga dapat melakukan intervensi lebih dini.
- Mengidentifikasi Faktor Risiko Utama: Menentukan faktor-faktor yang paling berpengaruh terhadap risiko gangguan tidur untuk memberikan insight yang berguna bagi pencegahan dan edukasi kesehatan.

### Solution Statements

Untuk mencapai goals yang telah ditetapkan, diajukan beberapa pendekatan solusi:

- Implementasi Multiple Neural Network Architecture: Menggunakan dua arsitektur neural network yang berbeda (Simple Neural Network dan Deep Neural Network) untuk membandingkan performa dan memilih model terbaik.
- Feature Engineering dan Preprocessing Optimization: Melakukan normalisasi data menggunakan StandardScaler, encoding categorical variables, dan handling missing values untuk meningkatkan kualitas input model.
- Comprehensive Model Evaluation: Menggunakan multiple metrics evaluation (Accuracy, Precision, Recall, F1-Score) dan confusion matrix untuk mendapatkan gambaran lengkap performa model.
- Feature Importance Analysis: Mengimplementasikan analisis feature importance menggunakan L1 regularization untuk mengidentifikasi variabel yang paling berpengaruh dalam prediksi gangguan tidur.

## Data Understanding
Dataset yang digunakan dalam proyek ini adalah "Sleep Health and Lifestyle Dataset" yang diperoleh dari Kaggle. Dataset ini berisi informasi tentang kebiasaan tidur dan gaya hidup dari kurang lebih 374 individu beserta status gangguan tidur mereka.

Sumber Dataset: (https://www.kaggle.com/datasets/uom190346a/sleep-health-and-lifestyle-dataset) 

### Variabel-variabel pada dataset adalah sebagai berikut:

- Person ID: Identifier unik untuk setiap individu
- Gender: Jenis kelamin (Male/Female)
- Age: Usia dalam tahun
- Occupation: Pekerjaan individu
- Sleep Duration: Durasi tidur per hari dalam jam
- Quality of Sleep: Rating kualitas tidur (skala 1-10)
- Physical Activity Level: Tingkat aktivitas fisik dalam menit per hari
- Stress Level: Tingkat stress (skala 1-10)
- BMI Category: Kategori BMI (Normal, Overweight, Obese)
- Blood Pressure: Tekanan darah (systolic/diastolic)
- Heart Rate: Denyut jantung per menit
- Daily Steps: Jumlah langkah harian
- Sleep Disorder: Target variable (None, Sleep Apnea, Insomnia)

**Exploratory Data Analysis**
Berdasarkan analisis eksploratori yang dilakukan:
- Jumlah dataset terdiri dari 374 baris dengan 13 kolom 
- Data Duplikasi: Tidak ditemukan data duplikat dalam dataset
- Missing Values: Terdapat missing values sebanyak 219 baris pada kolom Sleep Disorder yang dihandle dengan kategori 'Normal'
- Distribusi Gender: Dataset menunjukkan distribusi gender yang relatif seimbang, yaitu 50.5% laki-laki dan 49.5% perempuan
- Distribusi Usia: Mayoritas sampel berusia antara 25-59 tahun
- Durasi Tidur: Rata-rata durasi tidur berkisar antara 6-9 jam per hari
- Pengelompokan Tipe Data : Melihat tipe data pada dataset baik kategorikal & numerikal , dan mencari statistik deskriptif untuk dataset numerikal

## Data Preparation
Tahapan data preparation yang dilakukan meliputi:

1. Feature Selection
Menghapus kolom yang tidak relevan atau redundan:

- Person ID: Removed karena hanya identifier
- Blood Pressure: Removed karena kompleksitas parsing data string
- Occupation: Removed untuk simplifikasi model
- Heart Rate: Removed untuk mengurangi noise

Alasan: Kolom-kolom ini dihapus untuk fokus pada fitur yang paling relevan dan mengurangi kompleksitas model.

2. Missing Value Handling
Mengganti missing values pada kolom 'Sleep Disorder' dengan kategori 'Normal':

        df['Sleep Disorder'] = np.where(df['Sleep Disorder'].isna(), 'Normal', df['Sleep Disorder'])

Alasan: Asumsi bahwa individu tanpa diagnosis gangguan tidur dikategorikan sebagai normal.

3. Categorical Encoding

Menggunakan LabelEncoder untuk mengkonversi categorical variables:

- Gender: Male=1, Female=0
- BMI Category: Normal=0, Normal Weight=1, Obese=2, Overweight=3
- Sleep Disorder: Normal=0, Sleep Apnea=1, Insomnia=2

Alasan: Neural network membutuhkan input numerik, sehingga categorical variables perlu dikonversi.

4. Data Splitting

Membagi data menjadi training dan testing set dengan rasio 80:20:

        X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)

Alasan: Rasio 80:20 memberikan data training yang cukup sambil mempertahankan data test yang representatif.

5. Feature Scaling

Menggunakan StandardScaler untuk normalisasi fitur:

        scaler = StandardScaler()
        X_train_scaled = scaler.fit_transform(X_train)
        X_test_scaled = scaler.transform(X_test)

Alasan: Neural network bekerja lebih baik dengan fitur yang ter-normalisasi untuk mencegah bias terhadap fitur dengan nilai besar.

6. Target Encoding

Mengkonversi target variable menjadi categorical format untuk Keras:

        y_train_cat = to_categorical(y_train, num_classes=3)
        y_test_cat = to_categorical(y_test, num_classes=3)

Alasan: Format categorical diperlukan untuk multi-class classification dengan softmax activation.

## Modeling
Tahapan modeling menggunakan dua arsitektur Neural Network yang berbeda untuk membandingkan performa dan memilih model terbaik.

**1. Simple Neural Network**

Arsitektur model sederhana dengan karakteristik:
- Input Layer: Dense layer dengan 64 neurons, ReLU activation
- Hidden Layers:
    - Dense layer 32 neurons dengan ReLU activation
    - BatchNormalization dan Dropout (0.3 dan 0.2)
- Output Layer: Dense layer 3 neurons dengan softmax activation
- Optimizer: Adam dengan learning rate 0.001
- Loss Function: Categorical crossentropy

Kelebihan:
- Lebih cepat dalam training
- Cocok untuk dataset dengan ukuran kecil hingga menengah
- Lebih mudah untuk di-debug dan interpret

Kekurangan:
- Kemampuan terbatas dalam menangkap pola kompleks
- Mungkin underfit pada data yang kompleks

**2. Deep Neural Network**

Arsitektur model yang lebih kompleks dengan karakteristik:

- Input Layer: Dense layer dengan 128 neurons, ReLU activation
- Hidden Layers:
    - Dense layer 64 neurons dengan ReLU activation
    - Dense layer 32 neurons dengan ReLU activation
    - BatchNormalization dan Dropout (0.4, 0.3, 0.2)
- Output Layer: Dense layer 3 neurons dengan softmax activation
- Optimizer: Adam dengan learning rate 0.001
- Loss Function: Categorical crossentropy

Kelebihan:
- Mampu menangkap pola yang lebih kompleks
- Lebih baik dalam representasi fitur hierarkis
- Performa lebih baik pada dataset kompleks

Kekurangan:
- Lebih lama dalam training
- Risiko overfitting lebih tinggi
- Membutuhkan lebih banyak data

**Hyperparameter dan Teknik Optimization**

- Batch Normalization: Digunakan untuk menstabilkan training dan mempercepat konvergensi
- Dropout: Implementasi regularization untuk mencegah overfitting
- Early Stopping: Callback untuk menghentikan training jika tidak ada improvement pada validation loss
- Adam Optimizer: Chosen untuk adaptive learning rate yang efisien

**Model Selection**

Berdasarkan hasil evaluasi, model terbaik dipilih berdasarkan metrik accuracy tertinggi. Model terpilih kemudian disimpan dalam format H5 dan dikonversi ke TensorFlow.js untuk deployment.

## Evaluation
Evaluasi model menggunakan multiple metrics untuk mendapatkan gambaran komprehensif tentang performa model.

Metrik Evaluasi yang Digunakan
1. Accuracy
Mengukur proporsi prediksi yang benar dari total prediksi:
        Accuracy = (TP + TN) / (TP + TN + FP + FN)
Metrik ini memberikan gambaran umum seberapa baik model dalam melakukan prediksi secara keseluruhan.
2. Precision
Mengukur proporsi prediksi positif yang benar:
        Precision = TP / (TP + FP)
Penting untuk mengurangi false positive dalam konteks medis.
3. Recall (Sensitivity)
Mengukur proporsi actual positives yang berhasil dideteksi:
        Recall = TP / (TP + FN)
Krusial untuk memastikan tidak melewatkan kasus gangguan tidur yang sebenarnya.
4. F1-Score
Harmonic mean dari precision dan recall:
        F1-Score = 2 × (Precision × Recall) / (Precision + Recall)
Memberikan balance antara precision dan recall.

**Hasil Evaluasi Model**
Berdasarkan eksperimen yang dilakukan, perbandingan performa kedua model menunjukkan:
| Model               | Accuracy   | Precision  | Recall     | F1-Score   |
|:-------------------|:-----------|:-----------|:-----------|:-----------|
| Simple Neural Network | 0.8933 | 0.8913 | 0.8933 | 0.8912 |
| Deep Neural Network   | 0.8800 | 0.8833 | 0.8800 | 0.8748 |
Dari hasil evaluasi, model Simple Neural Network menunjukkan performa yang lebih baik dalam semua metrik evaluasi dibandingkan dengan Deep Neural Network.

**Analisis Hasil**
1. Model Performance: Simple Neural Network menunjukkan performa yang sedikit lebih baik dibandingkan Deep Neural Network, terutama dalam hal accuracy dan F1-score.
2. Visualisasi Hasil : Melakukan visualisasi hasil dalam bentuk grafik learning curve untuk melihat akurasi dan loss dari kedua model
2. Confusion Matrix Analysis: Analisis confusion matrix menunjukkan bahwa kedua model memiliki performa yang baik dalam membedakan antara ketiga kelas (Normal, Sleep Apnea, Insomnia).
3. Feature Importance: Analisis menunjukkan bahwa faktor-faktor seperti Age, Sleep Duration, Quality of Sleep, dan Pysichal Activity Level merupakan fitur yang paling berpengaruh dalam prediksi gangguan tidur.

## Model Testing & Prediction

1.Example Prediction dengan Data Uji

Pada tahap ini dilakukan prediksi menggunakan satu baris data dari data uji (X_test) untuk memastikan model berjalan dengan benar dan hasil prediksi bisa dipantau secara langsung.

Langkah-langkah:
- Mengambil satu sample data dari X_test.
- Melakukan scaling menggunakan scaler yang sama saat training.
- Melakukan prediksi menggunakan model terbaik (best_model).
- Mengubah hasil probabilitas prediksi menjadi kelas akhir menggunakan np.argmax().
- Memetakan hasil prediksi ke label sleep disorder (Normal, Sleep Apnea, Insomnia).
- Menampilkan hasil prediksi beserta nilai probabilitas dan actual label-nya.

Tujuan: Memastikan model bisa melakukan prediksi sesuai ekspektasi dan memvalidasi output terhadap data aktual.

2.Manual Prediction ( Input dari Pengguna )

Pada tahap Manual Prediction, dibuat sebuah fungsi bernama predict_sleep_disorder() yang bertujuan untuk memberikan pengalaman interaktif kepada pengguna. Melalui fungsi ini, pengguna dapat memasukkan nilai-nilai fitur secara manual melalui terminal atau command line sesuai dengan fitur yang digunakan oleh model, seperti Gender, Age, Sleep Duration, Physical Activity Level, Stress Level, BMI Category, Daily Steps, dan Quality of Sleep. Setelah seluruh data dimasukkan, input tersebut akan diproses dan di-scaling menggunakan metode yang sama seperti pada tahap training, agar sesuai dengan skala data yang dikenali oleh model. Selanjutnya, data yang telah diproses akan diprediksi menggunakan model terbaik yang telah dibuat sebelumnya. Model akan menghasilkan probabilitas untuk masing-masing kategori gangguan tidur, lalu probabilitas tersebut dikonversi menjadi label akhir berupa Normal, Sleep Apnea, atau Insomnia. Hasil prediksi ini kemudian ditampilkan kembali kepada pengguna bersama dengan nilai probabilitasnya, sehingga pengguna dapat mengetahui seberapa yakin model terhadap hasil prediksi yang diberikan.

## Export Model 

Tahapan export model ke Tensorflow.js yang dilakukan meliputi : 

1.Menentukan Direktori Penyimpanan Model : 
Menetapkan folder tujuan hasil export model ke TensorFlow.js:
- Direktori: `tfjs_model/`

Alasan: Memisahkan file hasil export agar lebih mudah dikelola dan didistribusikan.

2.Menyimpan Model ke Format TensorFlow.js

Menggunakan library `tensorflowjs` untuk mengonversi model Keras ke format TensorFlow.js:

                import tensorflowjs as tfjs

                tfjs_target_dir = 'tfjs_model/'
                tfjs.converters.save_keras_model(model, tfjs_target_dir)

Alasan: Format TensorFlow.js diperlukan agar model dapat di-load dan dijalankan di browser tanpa server backend.

Catatan: Saat proses ini, muncul warning terkait format HDF5 legacy. Warning tersebut aman diabaikan karena tidak mempengaruhi proses konversi ke TensorFlow.js.

3.Mengarsipkan Model

Membuat file .zip dari folder model untuk memudahkan proses deployment ke server hosting atau repository:

                import shutil

                shutil.make_archive('tfjs_model', 'zip', 'tfjs_model')

Alasan: Memudahkan proses upload atau distribusi file model dalam satu paket arsip.

4.Memeriksa Versi TensorFlow

Melakukan pengecekan versi TensorFlow yang digunakan selama training dan export model:
                import tensorflow as tf
                print(tf.__version__)

Alasan: Dokumentasi versi library diperlukan untuk memastikan kompatibilitas dan reproducibility proyek.

**Model berhasil diekspor ke dalam format TensorFlow.js dan siap untuk deployment di aplikasi web. Proses export menghasilkan file .json (arsitektur model) dan .bin (bobot model) yang dapat diakses menggunakan TensorFlow.js API di browser.**

**---Ini adalah bagian akhir laporan---**
