var express = require('express');
var router = express.Router();

var Apartment = require('../models/Apartment.js');

/* GET /apartments listing. */
router.get('/', function(req, res, next) {
  Apartment.find(function (err, apartments) {
    if (err) return next(err);
    res.json(apartments);
  });
});

/* POST /apartments */
router.post('/', function(req, res, next) {
  Apartment.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /apartments/id */
router.get('/:id', function(req, res, next) {
  Apartment.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /apartments/:id */
router.put('/:id', function(req, res, next) {
  Apartment.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /apartments/:id */
router.delete('/:id', function(req, res, next) {
  Apartment.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;