const router = require('express').Router();
const Portifolio = require('../models/Portifolio');
//CREATE
router.post('/', async(req, res) => {
    const portifolio = new Portifolio({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPortifolio = await portifolio.save();
        res.json({
            success: true,
            sata: savedPortifolio
        })
    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }
});
//READ
router.get('/', async(req, res) => {
    const portifolio = await Portifolio.find();
    try {
        res.json({
            success: true,
            data: portifolio
        });
    } catch (err) {
        res.json({
            success: false,
            message: err
        });
    }

});
router.get('/:slug', async(req, res) => {
    try {
        const portifolio = await Portifolio.findOne({
            slug: req.params.slug
        })
        res.json({
            success: true,
            data: portifolio
        })
    } catch (err) {
        res.json({
            success: false,
            message: er
        })
    }

});
//UPDATE
router.patch('/:slug', async(req, res) => {
    try {
        const updatedPortifolio = await Portifolio.updateOne({
            slug: req.params.slug
        }, {
            title: req.body.title,
            description: req.body.description
        });
        res.json({
            success: true,
            updated: updatedPortifolio.modifiedCount //CONTA QUANTOS FORAM ATUALIZADOS
        });

    } catch (err) {
        res.json({
            success: false,
            message: err
        });
    }
});
//DELETE
router.delete('/:slug', async(req, res) => {
    try {
        const deletePortifolio = await Portifolio.deleteOne({
            slug: req.params.slug
        });
        res.json({
            success: true,
            deleted: deletePortifolio.deletedCount
        });
    } catch (err) {
        res.json({
            success: false,
            message: err
        });
    }
});
module.exports = router;