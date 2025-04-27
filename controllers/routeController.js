const Route = require('../models/Route');

// Obtener rutas del usuario autenticado
const getUserRoutes = async (req, res) => {
  try {
    const userRoutes = await Route.find({ user: req.user.uid });
    res.json(userRoutes);
  } catch (err) {
    console.error('Error al obtener rutas:', err);
    res.status(500).json({ error: 'Error al obtener rutas' });
  }
};

// Obtener estadísticas
const getRouteStats = async (req, res) => {
  try {
    const rutas = await Route.find({ user: req.user.uid });
    const totalRutas = rutas.length;
    const rutasCompletadas = rutas.filter(r => r.completed).length;
    const duracionTotal = rutas.reduce((acc, r) => acc + (r.duration || 0), 0);
    res.json({ totalRutas, rutasCompletadas, duracionTotal });
  } catch (err) {
    console.error('Error al obtener estadísticas:', err);
    res.status(500).json({ error: 'Error al obtener estadísticas' });
  }
};

// Crear una nueva ruta y carga de imagenes coon Cloudinary
const createRoute = async (req, res) => {
  try {
    const { title, description, location, difficulty, duration, type, notes, completed, coords } = req.body;
    const imageUrl = req.file ? req.file.path : null;

    const newRoute = new Route({
      title,
      description,
      location,
      difficulty,
      duration,
      type,
      coords: Array.isArray(coords) ? coords : [coords],
      images: imageUrl ? [imageUrl] : [],
      completed: completed === 'true',
      notes,
      user: req.user.uid
    });

    const savedRoute = await newRoute.save();
    res.status(201).json({ route: savedRoute });
  } catch (error) {
    console.error('Error al crear ruta:', error);
    res.status(500).json({ message: 'Error al crear la ruta y subir la imagen', error: error.message });
  }
};

// Eliminar ruta
const deleteRoute = async (req, res) => {
  try {
    await Route.findOneAndDelete({ _id: req.params.id, user: req.user.uid });
    res.sendStatus(204);
  } catch (err) {
    console.error('Error al eliminar ruta:', err);
    res.status(500).json({ error: 'Error al eliminar la ruta' });
  }
};

module.exports = {
  getUserRoutes,
  getRouteStats,
  createRoute,
  deleteRoute
};
