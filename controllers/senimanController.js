const Seniman = require('../models/Seniman');

// GET semua seniman
exports.getAllSeniman = async (req, res, next) => {
    try {
        const seniman = await Seniman.find();
        res.status(200).json(seniman);
    } catch (error) {
        next(error);
    }
};

// GET seniman berdasarkan ID
exports.getSenimanById = async (req, res, next) => {
    try {
        const seniman = await Seniman.findById(req.params.id);

        if (!seniman) {
            return res.status(404).json({
                message: 'Seniman tidak ditemukan'
            });
        }

        res.status(200).json(seniman);
    } catch (error) {
        next(error);
    }
};

// POST tambah seniman
exports.createSeniman = async (req, res, next) => {
    try {
        const seniman = new Seniman(req.body);
        const savedSeniman = await seniman.save();

        res.status(201).json(savedSeniman);
    } catch (error) {
        next(error);
    }
};

// PUT update seniman
exports.updateSeniman = async (req, res, next) => {
    try {
        const seniman = await Seniman.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!seniman) {
            return res.status(404).json({
                message: 'Seniman tidak ditemukan'
            });
        }

        res.status(200).json(seniman);
    } catch (error) {
        next(error);
    }
};

// DELETE seniman
exports.deleteSeniman = async (req, res, next) => {
    try {
        const seniman = await Seniman.findByIdAndDelete(req.params.id);

        if (!seniman) {
            return res.status(404).json({
                message: 'Seniman tidak ditemukan'
            });
        }

        res.status(200).json({
            message: 'Seniman berhasil dihapus'
        });
    } catch (error) {
        next(error);
    }
};