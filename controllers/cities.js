const db = require('../models');

// Add city
const addCity = (req, res) => {
    db.City.create(req.body, (err, createdCity)=> {
        if (err) return console.log(err);
        res.json({
          status: 201,
          data: createdCity,
        })
    });
}

// Get list of cities
const showAll = (req, res) => {
    db.City.find({}, (err, allCities) => {
        if (err) return console.log(err);
        res.status(200).json({
            status: 200,
            data: allCities
        });
    });

}



module.exports = {
    addCity,
    showAll,
};