const express = require('express');
const router = express.Router();

const {
    getAllSeniman,
    getSenimanById,
    createSeniman,
    updateSeniman,
    deleteSeniman
} = require('../controllers/senimanController');

// GET semua seniman
router.get('/', getAllSeniman);

// GET seniman berdasarkan ID
router.get('/:id', getSenimanById);

// POST tambah seniman
router.post('/', createSeniman);

// PUT update seniman
router.put('/:id', updateSeniman);

// DELETE seniman
router.delete('/:id', deleteSeniman);

module.exports = router;