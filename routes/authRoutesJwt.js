const express = require('express');
const router = express.Router();
const { loginJWT, logoutJWT, verifySession } = require('../controllers/authControllerJwt');
const { verifyToken } = require('../middlewares/cryptoMiddleware');

// Login usando JWT + sesión
router.post('/loginjwt', loginJWT);
router.post('/logoutjwt', logoutJWT);

// Verificar sesión
router.get('/verifySession', verifyToken, verifySession);

module.exports = router;
