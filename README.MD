# Galeri Seni API

RESTful API untuk mengelola data karya seni dan seniman menggunakan Node.js, Express.js, dan MongoDB.

## Identitas

| Informasi | Keterangan |
|---|---|
| Nama | Varrel Fernando |
| NIM | 2428240068 |
| Kelas | SI5B |
| Mata Kuliah | Praktikum Pengembangan Aplikasi Web II |

## Teknologi

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS

## Fitur

- CRUD data karya seni.
- CRUD data seniman.
- Filter karya berdasarkan media.
- Sorting karya berdasarkan harga.
- Relasi karya seni dengan seniman menggunakan ObjectId.
- Embedded document untuk menyimpan ukuran karya.
- API Key authentication.
- Centralized error handling.
- Request logging.

## Struktur Project

```text
uts-paw2-2428240068/
├── controllers/
│   ├── karyaController.js
│   └── senimanController.js
├── middlewares/
│   ├── cekApiKey.js
│   ├── errorHandler.js
│   └── logger.js
├── models/
│   ├── karya.js
│   └── seniman.js
├── routes/
│   ├── karyaRoutes.js
│   └── senimanRoutes.js
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/varrelfernando/uts-paw2-2428240068.git
```

### 2. Masuk ke Folder Project

```bash
cd uts-paw2-2428240068
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Konfigurasi Environment

Buat file `.env` pada folder utama project.

```env
API_KEY=galeriseni2026
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/uts_paw2
```

### 5. Jalankan Aplikasi

```bash
npm run dev
```

Server berjalan pada:

```text
http://localhost:3000
```

## API Endpoints

### Karya

| Method | Endpoint | Keterangan |
|---|---|---|
| GET | `/karya` | Menampilkan semua karya |
| GET | `/karya/:id` | Menampilkan karya berdasarkan ID |
| POST | `/karya` | Menambahkan karya |
| PUT | `/karya/:id` | Memperbarui karya |
| DELETE | `/karya/:id` | Menghapus karya |

### Seniman

| Method | Endpoint | Keterangan |
|---|---|---|
| GET | `/seniman` | Menampilkan semua seniman |
| POST | `/seniman` | Menambahkan seniman |

## Filter dan Sorting

API mendukung filter berdasarkan media dan pengurutan berdasarkan harga.

Contoh request:

```http
GET