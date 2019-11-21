const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')

//PATH = /api/v1/posts

//GET All Posts
router.get('/all', ctrl.posts.showAll);
router.get('/:id', ctrl.posts.show);

module.exports = router;
