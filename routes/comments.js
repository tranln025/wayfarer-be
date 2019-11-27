const express = require('express');
const router = express.Router();

const ctrl = require('../controllers');

// PATH = /api/v1/comments

// GET all comments
router.get('/', ctrl.comments.showAllComments);

// ADD new comment
router.post('/', ctrl.comments.addComment);

// // DELETE all comments
// router.delete('/', ctrl.comments.deleteAllComments);

module.exports = router;