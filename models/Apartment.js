const mongoose = require('mongoose');
const ApartmentSchema = new mongoose.Schema({
    code: String,
    description: String,
    completed: Boolean,
    carpetArea: Number,
    buildupArea: Number,
    status: Number
  });
  
  module.exports = mongoose.model('Apartment', ApartmentSchema);