const express = require('express');
const router = express.Router();

const ctrl = require('../controllers');

// PATH = /api/v1/cities

// GET all cities
router.get('/', ctrl.cities.showAllCities);

// ADD new city
router.post('/', ctrl.cities.addCity);

// DELETE all cities
router.delete('/', ctrl.cities.deleteAllCities)

module.exports = router;

