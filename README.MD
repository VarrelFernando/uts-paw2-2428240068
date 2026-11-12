# Galeri Seni API

RESTful API untuk mengelola data karya seni dan seniman menggunakan Node.js, Express.js, dan MongoDB.

## Identitas

- Nama: Varrel Fernando
- NIM: 2428240068
- Kelas: SI5B
- Mata Kuliah: Praktikum Pengembangan Aplikasi Web II

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
- Relasi data karya dengan seniman menggunakan ObjectId.
- Embedded document untuk ukuran karya.
- API Key authentication.
- Centralized error handling.
- Request logging.

## Instalasi

1. Clone repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Buat file `.env`:

   ```env
   API_KEY=galeriseni2026
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/uts_paw2
   ```

4. Jalankan aplikasi:

   ```bash
   npm run dev
   ```

## Endpoint API

| Method | Endpoint | Keterangan |
|---|---|---|
| GET | `/karya` | Menampilkan semua karya |
| GET | `/karya/:id` | Menampilkan karya berdasarkan ID |
| POST | `/karya` | Menambahkan karya |
| PUT | `/karya/:id` | Memperbarui karya |
| DELETE | `/karya/:id` | Menghapus karya |
| GET | `/seniman` | Menampilkan semua seniman |
| POST | `/seniman` | Menambahkan seniman |

## Filter dan Sorting

Contoh:

```http
GET /karya?media=lukis&sort=harga
```

## API Key

Untuk request POST, PUT, dan DELETE, gunakan header:

```http
x-api-key: galeriseni2026
```

## Database

Nama database: `uts_paw2`

Collections:
- `karyas`
- `senimen`