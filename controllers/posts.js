const db = require('../models');

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

const show = (req, res) => {
    db.Post.findById(req.params.postId, (err, foundPost) => {
        if(err) return res.status(500).json({
            status: 500,
            message: err
        });

        res.status(200).json({
            status: 200,
            data: foundPost
        });
    })
    .populate('author')
    .populate('city')
};



module.exports = {
    showAll,
    show
};