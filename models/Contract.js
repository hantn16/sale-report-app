const mongoose = require('mongoose');
const ContractSchema = new mongoose.Schema({
    name: String,
    signDay: String,
    contractPrice: Number
  });
  
  module.exports = mongoose.model('Contract', ContractSchema);