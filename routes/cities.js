const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')

//PATH = api/v1/cities


// ADD CITY
router.post('/addCity', ctrl.cities.addCity);
router.get('/', ctrl.cities.showAll);



module.exports = router;
