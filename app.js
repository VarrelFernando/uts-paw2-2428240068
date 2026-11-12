const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import Middleware
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

// Import Routes
const karyaRoutes = require('./routes/karyaRoutes');
const senimanRoutes = require('./routes/senimanRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use('/karya', karyaRoutes);
app.use('/seniman', senimanRoutes);

// Error Handler (harus paling bawah)
app.use(errorHandler);

// Koneksi MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB berhasil terhubung');

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server berjalan di port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Gagal menghubungkan MongoDB:', error.message);
    });