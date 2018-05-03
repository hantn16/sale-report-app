const mongoose = require('mongoose');
const SellerSchema = new mongoose.Schema({
    name: String,
    taxCode: String,
    address: String
  });
  
  module.exports = mongoose.model('Seller', SellerSchema);