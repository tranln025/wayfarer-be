const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')

//PATH = /api/v1/posts

//GET All Posts
router.get('/all', ctrl.posts.showAll);
// router.get('/:id', ctrl.posts.show);
router.get('/find', ctrl.posts.findPosts);
// router.get('/find/:cityName', ctrl.posts.findPostsByCityName);


// ADD POST
router.post('/new', ctrl.posts.addPost);

module.exports = router;
