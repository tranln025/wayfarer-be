const db = require('../models');

// GET all posts
const showAll = (req, res) => {
    db.Post.find({})
    .populate('author')
    .populate('city')
    .exec((err, allPosts) => {
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
    db.Post.findById(req.params.id)
    .populate('author')
    .populate('city')
    .exec((err, foundPost) => {
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


const addPost = (req, res) => {
    const postData = {...req.body, author: req.session.currentUser.id};
    db.Post.create(postData, (error, createdPost)=>{
        if (error) return console.log(error);
        db.User.findById(createdPost.author, (err, foundUser) => {
            if (err) return console.log(err);
            foundUser.posts.push(createdPost._id);
            foundUser.save((err, updatedUser) => {
                if (err) return console.log(err);
                res.json({
                    status: 201,
                    data: updatedUser,
                });
            });
        });
    });
};

const findPosts = (req, res) => {
    db.City.find(req.query, (error, foundCity)=> {
        if (error) return console.log(error);
        cityId = foundCity[0]._id;
        db.Post.find({city: cityId._id}).populate('author').exec((error, foundPosts)=> {
            if (error) return console.log(error);
            res.json({
                status: 201,
                data: foundPosts,
            })
        }); 
    });
};

// Update one post
const updatePost = (req, res) => {
    db.Post.findByIdAndUpdate(req.params.id, req.body, (err, updatedPost) => {
        if (err) return console.log(err);
        res.json({
            status: 201,
            data: updatedPost,
        });
    });
};


// delete one post
const deletePost = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (error, deletedPost) => {
        if (error) return console.log(error);
        res.json({
            status: 200,
            data: deletedPost
        });
    });
};


module.exports = {
    showAll,
    show,
    addPost,
    findPosts,
    updatePost,
    deletePost,
};