const Route = require('../models/Route');

// Obtener rutas del usuario autenticado
const getUserRoutes = async (req, res) => {
  try {
    const userRoutes = await Route.find({ user: req.user.uid });
    res.json(userRoutes);
  } catch (error) {
    console.error('Error al obtener rutas de usuario:', error);
    res.status(500).json({ error: 'Error al obtener rutas del usuario' });
  }
};

//Obtener estadísticas del usuario autenticado (Dashboard)
const getRouteStats = async (req, res) => {
  try {
    const userId = req.user.uid;
    const routes = await Route.find({ user: userId });

    const totalRutas = routes.length;
    const rutasCompletadas = routes.filter(route => route.completed).length;
    const duracionTotal = routes.reduce((sum, route) => sum + (route.duration || 0), 0);

    res.json({ totalRutas, rutasCompletadas, duracionTotal });
  } catch (error) {
    console.error('Error al obtener estadísticas:', error);
    res.status(500).json({ error: 'Error al obtener estadísticas' });
  }
};

//Crear nueva ruta del usuario autenticado
const createRoute = async (req, res) => {
  try {
    const {
      title,
      description,
      location,
      difficulty,
      duration,
      type,
      coords,
      images,
      completed,
      notes
    } = req.body;

    const route = await Route.create({
      user: req.user.uid, //Asignamos automáticamente el UID del usuario
      title,
      description,
      location,
      difficulty,
      duration,
      type,
      coords,
      images,
      completed,
      notes
    });

    res.status(201).json(route);
  } catch (error) {
    console.error('Error al crear ruta:', error);
    res.status(500).json({ message: 'Error al crear la ruta', error: error.message });
  }
};

//Eliminar ruta (sólo si pertenece al usuario autenticado)
const deleteRoute = async (req, res) => {
  try {
    const route = await Route.findById(req.params.id);

    if (!route) {
      return res.status(404).json({ error: 'Ruta no encontrada' });
    }

    if (route.user !== req.user.uid) {
      return res.status(403).json({ error: 'No tienes permiso para eliminar esta ruta' });
    }

    await Route.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error al eliminar ruta:', error);
    res.status(500).json({ error: 'Error al eliminar la ruta' });
  }
};

module.exports = {
  getUserRoutes,
  getRouteStats,
  createRoute,
  deleteRoute
};
