const admin = require('firebase-admin');
const auth = admin.auth();

// Middleware de validación de acceso a rutas de usuario
const checkAuth = (req, res, next) => {
  const idTokenCookie = req.cookies.token;

  if (!idTokenCookie) {
    return res.redirect('/login');
  }

  auth.verifyIdToken(idTokenCookie)
    .then((decodedToken) => {
      req.user = decodedToken;
      next();
    })
    .catch((error) => {
      console.log(`Error al verificar el token de las cookies: ${error}`);
      res.status(401).json({ error: "Token inválido" });
    });
};

module.exports = checkAuth;
