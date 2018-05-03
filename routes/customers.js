var express = require('express');
var router = express.Router();

var Customer = require('../models/Customer.js');

/* GET /customers listing. */
router.get('/', function(req, res, next) {
  Customer.find(function (err, customers) {
    if (err) return next(err);
    res.json(customers);
  });
});

/* POST /customers */
router.post('/', function(req, res, next) {
  Customer.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /customers/id */
router.get('/:id', function(req, res, next) {
  Customer.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /customers/:id */
router.put('/:id', function(req, res, next) {
  Customer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /customers/:id */
router.delete('/:id', function(req, res, next) {
  Customer.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;