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



module.exports = {
    showAll,
    show,
    addPost,
    findPosts,
};