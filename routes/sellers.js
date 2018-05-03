var express = require('express');
var router = express.Router();

var Seller = require('../models/Seller.js');

/* GET /sellers listing. */
router.get('/', function(req, res, next) {
  Seller.find(function (err, sellers) {
    if (err) return next(err);
    res.json(sellers);
  });
});

/* POST /sellers */
router.post('/', function(req, res, next) {
  Seller.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /sellers/id */
router.get('/:id', function(req, res, next) {
  Seller.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /sellers/:id */
router.put('/:id', function(req, res, next) {
  Seller.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /sellers/:id */
router.delete('/:id', function(req, res, next) {
  Seller.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;