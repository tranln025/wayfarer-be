const db = require('../models');

// DELETE nuke all posts
const deleteAllPosts = (req, res) => {
    db.User.deleteMany({}, (err, deletedPosts) => {
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

// const addCity = (req, res) => {
//     db.City.create(req.body, (err, createdCity)=> {
//         if (err) return console.log(err);
//         res.json({
//             status: 201,
//             data: createdCity,
//         })
//     });
// }

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
    addPost,
    findPosts,
    updatePost,
    deleteAllPosts
};