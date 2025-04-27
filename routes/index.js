const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const publicRoutes = require('./public');
const marketplaceRoutes = require('./marketplace');
const blogRoutes = require('./blog');
const authRoutes = require('./authRoutes');
const guidesRoutes = require('./guides');
const authRoutesJwt = require('./authRoutesJwt');


router.use('/users/routes', userRoutes);
router.use('/routes', publicRoutes);
router.use('/marketplace', marketplaceRoutes);
router.use('/blog', blogRoutes);
router.use('/auth', authRoutes);
router.use('/guides', guidesRoutes);
router.use('/auth', authRoutesJwt);

module.exports = router;
