const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')

//PATH = /api/v1/posts

// FOR TESTING: nuke all posts
router.delete('/all', ctrl.posts.deleteAllPosts);

//GET All Posts
router.get('/all', ctrl.posts.showAll);

// router.get('/:id', ctrl.posts.show);


// ADD POST
router.post('/new', ctrl.posts.addPost);

<<<<<<< HEAD

// Find post 
router.get('/find', ctrl.posts.findPosts);

=======
// DELETE POST
router.delete('/:id', ctrl.posts.deletePost);
>>>>>>> submaster

module.exports = router;
