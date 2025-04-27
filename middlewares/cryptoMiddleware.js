const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/cryptoConfig');

//Middleware para verificar el token JWT y poder acceder al panel admin.
function generateToken(user) {
  return jwt.sign({ id: user.id, name: user.name }, jwtSecret, { expiresIn: '1h' });
}

function verifyToken(req, res, next) {
  const token = req.session.token;

  if (!token) {
    req.session.destroy(() => {}); // para que al cerrar la sesión se elimine el token
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      req.session.destroy(() => {}); //para que al cerrar la sesión se elimine el token
      return res.status(401).json({ message: 'Token inválido', error: err.message });
    }
    req.user = decoded;
    next();
  });
}

module.exports = {
  generateToken,
  verifyToken
};
