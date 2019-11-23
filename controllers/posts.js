const db = require('../models');

// DELETE nuke all posts
const deleteAllPosts = (req, res) => {
    db.Post.deleteMany({}, (err, deletedPosts) => {
        if (err) return console.log(err);
            res.json({
            status: 200,
        });
    });
};

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
    db.Post.findById(req.params.id, (err, foundPost) => {
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

const addPost = (req, res) => {
    console.log(req.session.currentUser.id)
    const postData = {...req.body, author: req.session.currentUser.id}
    db.Post.create(postData, (error, createdPost)=>{
        if (error) return console.log(error);
<<<<<<< HEAD
       userId = req.session.currentUser;
    //    userId = "5dd8874e18920f24c824d9a7"
        console.log(userId);
        createdPost.author = userId;
        createdPost.save((err, savedPost) => {
            if (err) return console.log(err);
            console.log('Successfully created post');
            db.User.findById(userId,(err,user)=>{
                if (err) return res.json(500)
                if(user){
                user.posts.push(createdPost._id)
                user.save((err,saved)=>{
                    console.log('yeet')
                })}
            })
            res.json({
                status: 201,
                data: savedPost,
            })    
        })
=======
        console.log('Successfully created post');
        res.json({
            status: 201,
            data: createdPost,
        }) 
>>>>>>> submaster
    });
};

const findPosts = (req, res) => {
    console.log(req.query);

    db.City.find(req.query, (error, foundCity)=> {
        if (error) return console.log(error);
        city_id = foundCity[0]._id;
        db.Post.find({city: city_id._id}).populate('author').exec((error, foundPosts)=> {
            if (error) return console.log(error);
            res.json({
                status: 201,
                data: foundPosts,
            })
        }); 
    })
};

// Update one post
const updatePost = (req, res) => {
    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) return console.log(err);
        console.log(req.body);
        if (req.body.city) {
            foundPost.city = req.body.city;
        };
        if (req.body.title) {
            foundPost.title = req.body.title;
        };
        if (req.body.content) {
            foundPost.content = req.body.content;
        };
        if (req.body.photo) {
            foundPost.photo = req.body.photo;
        };

        foundPost.save((err, updatedPost)=> {
            if (err) console.log(err);
            console.log(updatedPost)
        });

        res.json({
            status: 201,
            data: foundPost,
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
}


module.exports = {
    showAll,
    show,
    addPost,
    findPosts,
    updatePost,
    deleteAllPosts,
    deletePost,
};