const mongoose = require('mongoose');

const RouteGuideSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  imagen: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  instagram: {
    type: String
  },
  correoElectronico: {
    type: String,
    required: true
  } 
}, {
  timestamps: true
});

module.exports = mongoose.model('RouteGuide', RouteGuideSchema);

