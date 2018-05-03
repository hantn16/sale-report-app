const express = require('express');
var app = express();
const router = express.Router();
const apartments = require('./apartments')

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'ngTodo' });
    res.send('Hello!!! This is index page');
});

module.exports = router;