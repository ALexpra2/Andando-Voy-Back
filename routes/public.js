const express = require('express');
const router = express.Router();
const Route = require('../models/Route');

// Obtener todas las rutas de todos los usuarios
router.get('/', async (req, res) => {
  try {
    const allRoutes = await Route.find();
    res.status(200).json(allRoutes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al obtener todas las rutas' });
  }
});

module.exports = router;