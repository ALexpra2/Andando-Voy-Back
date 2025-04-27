const Marketplace = require('../models/Marketplace');

// Obtener todos los anuncios
const getAllAds = async (req, res) => {
  try {
    const anuncios = await Marketplace.find();
    res.status(200).json(anuncios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al obtener los anuncios' });
  }
};

// Crear un nuevo anuncio
const createAd = async (req, res) => {
  try {
    const anuncio = await Marketplace.create({ 
      ...req.body, 
      userId: req.user.uid 
    });
    res.status(201).json(anuncio);
  } catch (err) {
    console.error(err);
    res.status(400).json({ mensaje: 'Hubo un problema al crear el anuncio' });
  }
};

// Editar un anuncio
const updateAd = async (req, res) => {
  try {
    const actualizado = await Marketplace.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(actualizado);
  } catch (err) {
    console.error(err);
    res.status(400).json({ mensaje: 'Error al actualizar el anuncio' });
  }
};

// Eliminar un anuncio
const deleteAd = async (req, res) => {
  try {
    await Marketplace.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: 'Anuncio eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al eliminar el anuncio' });
  }
};

module.exports = {
  getAllAds,
  createAd,
  updateAd,
  deleteAd
};
