const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message);

    // Error validasi Mongoose
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            message: 'Validasi gagal',
            error: err.message
        });
    }

    // Error data duplikat
    if (err.code === 11000) {
        return res.status(409).json({
            message: 'Data sudah terdaftar atau duplikat',
            error: err.message
        });
    }

    // Error ID tidak valid
    if (err.name === 'CastError') {
        return res.status(400).json({
            message: 'ID tidak valid'
        });
    }

    // Error lainnya
    res.status(500).json({
        message: 'Terjadi kesalahan pada server',
        error: err.message
    });
};

module.exports = errorHandler;