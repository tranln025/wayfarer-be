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

        // Generate Salt (Asynchronous callback version)
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });
            // if (err) throw err;
      
            // Hash User Password
            bcrypt.hash(req.body.password, salt, (err, hash) => {
              if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again'});
      
              const newUser = {
                name: req.body.name,
                email: req.body.email,
                password: hash,
              }
      
              db.User.create(newUser, (err, savedUser) => {
                if (err) return res.status(500).json({ status: 500, message: err});
                res.status(201).json({ status: 201, data: savedUser, message: 'success' });
              });
            });
          });
        });
  };

//POST Login
const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ status: 400, message: 'Please enter your email and password' });
    }
    
    db.User.findOne({email: req.body.email}, (err, foundUser) => {
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });
    
        if (!foundUser) {
          return res.status(400).json({ status: 400, message: 'Username or password is incorrect'});
        }
    
        bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
            if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

            if (isMatch) {
                req.session.currentUser = { id: foundUser._id };
                return res.status(200).json({ status: 200, message: 'Success', data: foundUser._id });
            } else {
                return res.status(400).json({ status: 400, message: 'Username or password is incorrect' });
            }
        });
    });
};

//Post Logout
const logout = (req, res) => {
    if(!req.session.currentUser) return res.status(401).json({ status: 401, message: 'Unauthorized' });
    res.session.destroy((err) => {
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong, please try again' });
        res.sendStatus(200);
    });
};

module.exports = {
    register,
    login,
    logout
};