const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/cryptoMiddleware');
const { getAllGuides, createGuide, updateGuide, deleteGuide } = require('../controllers/guideController');

router.get('/', getAllGuides);
router.post('/', verifyToken, createGuide);
router.put('/:id', verifyToken, updateGuide);
router.delete('/:id', verifyToken, deleteGuide);

module.exports = router;
