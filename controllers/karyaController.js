const Karya = require('../models/Karya');

// GET semua karya dengan filter dan sorting
exports.getAllKarya = async (req, res, next) => {
    try {
        const filter = {};

        // Filter berdasarkan media
        if (req.query.media) {
            filter.media = req.query.media;
        }

        // Sorting berdasarkan harga
        let sort = {};

        if (req.query.sort === 'harga') {
            sort = { harga: 1 };
        }

        console.log('Query:', req.query);
        console.log('Sorting:', sort);

       const karya = await Karya.find(filter)
    .populate('senimanId', 'kode nama')
    .exec();

if (req.query.sort === 'harga') {
    karya.sort((a, b) => a.harga - b.harga);
}

        res.status(200).json(karya);
    } catch (error) {
        next(error);
    }
};

// GET karya berdasarkan ID
exports.getKaryaById = async (req, res, next) => {
    try {
        const karya = await Karya.findById(req.params.id)
            .populate('senimanId', 'kode nama');

        if (!karya) {
            return res.status(404).json({
                message: 'Karya tidak ditemukan'
            });
        }

        res.status(200).json(karya);
    } catch (error) {
        next(error);
    }
};

// POST tambah karya
exports.createKarya = async (req, res, next) => {
    try {
        const karya = new Karya(req.body);
        const savedKarya = await karya.save();

        const result = await Karya.findById(savedKarya._id)
            .populate('senimanId', 'kode nama');

        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

// PUT update karya
exports.updateKarya = async (req, res, next) => {
    try {
        const karya = await Karya.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        ).populate('senimanId', 'kode nama');

        if (!karya) {
            return res.status(404).json({
                message: 'Karya tidak ditemukan'
            });
        }

        res.status(200).json(karya);
    } catch (error) {
        next(error);
    }
};

// DELETE karya
exports.deleteKarya = async (req, res, next) => {
    try {
        const karya = await Karya.findByIdAndDelete(req.params.id);

        if (!karya) {
            return res.status(404).json({
                message: 'Karya tidak ditemukan'
            });
        }

        res.status(200).json({
            message: 'Karya berhasil dihapus'
        });
    } catch (error) {
        next(error);
    }
};