const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')

//PATH = /api/v1/users

// FOR TESTING: get all, nuke all
router.get('/all', ctrl.users.showAllUsers);
router.delete('/all', ctrl.users.deleteAllUsers);

//GET Profile by ID
router.get('/findById/:id', ctrl.users.show);
//PUT Update Profile
router.put('/:id/update', ctrl.users.update);

module.exports = router;