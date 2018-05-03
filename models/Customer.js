const mongoose = require('mongoose');
const CustomerSchema = new mongoose.Schema({
    name: String,
    idNo: String,
    dateOfIssue: String,
    placeOfIssue: String,
    phoneNumber: String,
    email: String
  });
  
  module.exports = mongoose.model('Customer', CustomerSchema);