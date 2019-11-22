const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// PATH = /api/v1/cities

// GET all cities
router.get('/all', ctrl.cities.showAllCities);

// ADD new city
router.post('/new', ctrl.cities.addCity);

// DELETE all cities
router.delete('/all', ctrl.cities.deleteAllCities)

module.exports = router;