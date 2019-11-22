const db = require('../models');

const show = (req, res) => {
    if(!req.session.currentUser) return res.status(401).json({
        status: 401,
        message: 'Please log in and try again'
    });

    db.User.findById(req.session.currentUser.id, (err, foundUser) => {
        if (err) return res.status(500).json({
            status: 500,
            message: err
        });

        res.status(200).json({
            status: 200,
            data: foundUser
        });
    });
};

const update = (req, res) => {

    if(!req.session.currentUser) return res.status(401).json({
        status: 401,
        message: 'Please log in and try again'
    });

    db.User.findById(req.session.currentUser.id, (err, foundUser)=>{
        if (err) {console.log(err); return};
        console.log(req.body);
        if (req.body.username) {
            foundUser.username = req.body.username;
        };
        if (req.body.email) {
            foundUser.email = req.body.email;
        };
        if (req.body.currentCity) {
            foundUser.currentCity = req.body.currentCity
        }
        if (req.body.photo) {
            foundUser.photo = req.body.photo;
        }

        foundUser.save((err, updstedUser)=> {
            if (err) console.log(err);
            console.log(updstedUser)
        });

        res.json({
            status: 201,
            data: foundUser,
        })
    })
};


module.exports = {
    show,
    update,
};