const db = require('../models');

// GET all posts
const showAll = (req, res) => {
    db.Post.find({}, (err, allPosts) => {
        if(err) return res.status(500).json({
            status: 500,
            message: err
        });

        res.status(200).json({
            status: 200,
            data: allPosts
        });
    });
};

// GET one post
const show = (req, res) => {
    db.Post.findById(req.____PostId_Here____, (err, foundPost) => {
        if(err) return res.status(500).json({
            status: 500,
            message: err
        });

        res.status(200).json({
            status: 200,
            data: foundPost
        });
    });
};

// Update one post
const updatePost = (req, res) => {
    // db.Post.findByIdAndUpdate(req.____PostId_Here____, 
    //     { $set: {  } })
    db.Post.findById(req.____PostId_Here____, (err, foundPost) => {
        if (err) return console.log(err);
        
    })
}



module.exports = {
    showAll,
    show,
    updatePost
};