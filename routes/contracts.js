var express = require('express');
var router = express.Router();

var Contract = require('../models/Contract.js');

/* GET /contracts listing. */
router.get('/', function(req, res, next) {
  Contract.find(function (err, contracts) {
    if (err) return next(err);
    res.json(contracts);
  });
});

/* POST /contracts */
router.post('/', function(req, res, next) {
  Contract.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /contracts/id */
router.get('/:id', function(req, res, next) {
  Contract.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /contracts/:id */
router.put('/:id', function(req, res, next) {
  Contract.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /contracts/:id */
router.delete('/:id', function(req, res, next) {
  Contract.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;