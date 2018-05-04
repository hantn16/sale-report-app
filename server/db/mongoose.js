const mongoose = require('mongoose');
const serverConfig = require('../config');

mongoose.Promise = global.Promise;
mongoose.connect(serverConfig.mongoURL,(e) =>{
    if (e) {
        console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
        throw e;
      }
});

module.exports = {mongoose};