// ------------------------------------------------------------------- INPORTS
const router = require('express').Router();
require('../db/mongoConnection');
const portifolio = require('./portifolio');
// ------------------------------------------------------------------- ROTAS
router.get('/', (req, res) => { //req = request, res= response
    res.json({
        success: false,
        message: 'Please, do not call /api, it is for our server.'
    });
});
router.use('/portifolio', portifolio);
module.exports = router;