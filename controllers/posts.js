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

const addCity = (req, res) => {
    db.City.create(req.body, (err, createdCity)=> {
        if (err) return console.log(err);
        res.json({
          status: 201,
          data: createdCity,
        })
    });
}

const addPost = (req, res) => {
    // let newPost = {
    //     title: req.body.title,
    //     city: req.body.city,
    //     content: req.body.content,
    //     user: req.session.currentUser,
    // }
    db.Post.create(req.body, (error, createdPost)=>{
        if (error) return console.log(error);
        res.json({
          status: 201,
          data: createdPost,
        })
    });
};


module.exports = {
    showAll,
    show,
    addCity,
    addPost,
};