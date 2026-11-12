const express = require('express');
const router = express.Router();

const {
    getAllKarya,
    getKaryaById,
    createKarya,
    updateKarya,
    deleteKarya
} = require('../controllers/karyaController');

// GET semua karya
router.get('/', getAllKarya);

// GET karya berdasarkan ID
router.get('/:id', getKaryaById);

// POST tambah karya
router.post('/', createKarya);

// PUT update karya
router.put('/:id', updateKarya);

// DELETE karya
router.delete('/:id', deleteKarya);

module.exports = router;