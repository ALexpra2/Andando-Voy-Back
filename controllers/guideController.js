const RouteGuide = require('../models/Guides');

// Obtener todos los perfiles de guías
const getAllGuides = async (req, res) => {
  try {
    const guias = await RouteGuide.find();
    res.status(200).json(guias);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al obtener los perfiles de guías de rutas' });
  }
};

// Crear un perfil de guía
const createGuide = async (req, res) => {
  try {
    const guia = await RouteGuide.create({
      ...req.body,
      userId: req.user.uid
    });
    res.status(201).json(guia);
  } catch (err) {
    console.error(err);
    res.status(400).json({ mensaje: 'Hubo un problema al crear el perfil de guía' });
  }
};

// Editar un perfil de guía
const updateGuide = async (req, res) => {
  try {
    const actualizado = await RouteGuide.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(actualizado);
} catch (err) {
    console.error(err);
    res.status(400).json({ mensaje: 'Error al actualizar el perfil de guía' });
}
};

// Eliminar un perfil de guía
const deleteGuide = async (req, res) => {
  try {
    await RouteGuide.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: 'Perfil de guía eliminado correctamente' });
} catch (err) {
  console.error(err);
  res.status(500).json({ mensaje: 'Error al eliminar el perfil de guía' });
}
};

module.exports = {
  getAllGuides,
  createGuide,
  updateGuide,
  deleteGuide
};
