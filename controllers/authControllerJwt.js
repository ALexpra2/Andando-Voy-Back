const { users } = require('../data/users');
const { generateToken } = require('../middlewares/cryptoMiddleware');

// Controlador para login
const loginJWT = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  const token = generateToken(user);
  req.session.token = token;

  res.json({ message: 'Login exitoso' });
};

// Controlador para logout
const logoutJWT = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.json({ message: 'Sesión cerrada' });
  });
};

// Controlador para verificar sesión
const verifySession = (req, res) => {
  res.status(200).json({ mensaje: 'Sesión válida', user: req.user });
};

module.exports = {
  loginJWT,
  logoutJWT,
  verifySession
};

