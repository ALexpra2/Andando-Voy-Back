const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/cryptoMiddleware');
const { getAllAds, createAd, updateAd, deleteAd } = require('../controllers/marketplaceController');


router.get('/', getAllAds);
router.post('/', verifyToken, createAd);
router.put('/:id', verifyToken, updateAd);
router.delete('/:id', verifyToken, deleteAd);

module.exports = router;
