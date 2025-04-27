const mongoose = require('mongoose');

const marketplaceSchema = new mongoose.Schema({
  userId: String,
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Marketplace', marketplaceSchema);
