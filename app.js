const express = require('express');
// load mongoose package
var mongoose = require('mongoose');
// Use native Node promises
mongoose.Promise = global.Promise;
// connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/sale-report-api')
  .then(() =>  console.log('connection succesfull'))
  .catch((err) => console.error(err));
const app = express();
const routes = require('./routes/index');
const apartments = require('./routes/apartments');
const contracts = require('./routes/contracts');
const customers = require('./routes/customers');
const sellers = require('./routes/sellers');
app.use('/',routes);
app.use('/apartments', apartments);
app.use('/contracts',contracts);
app.use('/customers',customers);
app.use('/sellers',sellers);

app.listen(3000);