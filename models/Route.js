const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  user: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  location: String,
  difficulty: { type: String, enum: ['baja', 'media', 'alta'] },
  duration: Number,
  type: { type: String, enum: ['circular', 'lineal'] },
  coords: {
    type: [{
      lat: Number,
      lng: Number
    }],
    _id: false 
  },
  images: [String],
  completed: { type: Boolean, default: false },
  notes: String,
  createdAt: { type: Date, default: Date.now }
});

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;