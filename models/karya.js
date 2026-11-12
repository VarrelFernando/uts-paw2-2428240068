const mongoose = require('mongoose');

// Schema ukuran tanpa _id
const ukuranSchema = new mongoose.Schema({
    panjang: {
        type: String,
        required: true
    },
    lebar: {
        type: String,
        required: true
    }
}, { _id: false });

// Schema Karya
const karyaSchema = new mongoose.Schema({
    kodeKarya: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    judul: {
        type: String,
        required: true,
        trim: true
    },
    harga: {
        type: Number,
        required: true,
        min: 0
    },
    media: {
        type: String,
        required: true,
        trim: true
    },
    ukuran: {
        type: ukuranSchema,
        required: true
    },
    senimanId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seniman',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Karya', karyaSchema);