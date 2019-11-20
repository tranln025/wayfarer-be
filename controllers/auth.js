const bcrypt = require('bcryptjs');
const db = require('../models');

const register = (req, res) => {
    //Check that information exists
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ status: 400, message: 'Please enter a name, email, and password' });
    }
    //Verify Account doesn't already exist:
    db.User.findOne({ email: req.body.email }, (err, foundUser) => {
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong... Please try again!'});
        //Existing User found:
        if (foundUser) return res.status(400).json({ status: 400, message: 'This user has already been registered, please log in or sign up with different information.'});

        //Generate Salt
        bcrypt.genSalt(10, (err, salt) => {
            //throw err if there's and error
            if (err) return res.status(500).json({ status: 500, message: 'Something went wrong, please try again' });

            const newUser = {
                name: req.body.name,
                email: req.body.email,
                password: hash
            }

            db.User.create(newUser, (err, savedUser) => {
                if (err) return res.status(500).json({ status: 500, message: err});
                res.sendStatus(201);
            });
        });
    });
};

module.exports = {
    register
}