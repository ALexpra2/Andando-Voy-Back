const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });
const checkAuth = require('../middlewares/authMiddleware');
const { getUserRoutes, getRouteStats, createRoute, deleteRoute } = require('../controllers/routeController');

router.get('/', checkAuth, getUserRoutes);
router.get('/stats', checkAuth, getRouteStats);
router.post('/routes', upload.single('image'), checkAuth, createRoute);
router.delete('/:id', checkAuth, deleteRoute);

module.exports = router;
