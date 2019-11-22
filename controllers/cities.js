const db = require('../models');


const addCity = (req, res) => {
  db.City.create(req.body, (err, createdCity)=> {
      if (err) return console.log(err);
      res.json({
          status: 201,
          data: createdCity,
      })
  });
}

const deleteAllCities = (req, res) => {
  db.City.deleteMany({}, (err, deletedCities) => {
      if (err) return console.log(err);
          res.json({
          status: 200,
      });
  });
};

const showAllCities = (req, res) => {
  db.City.find({}, (err, allCities) => {
    if(err) return res.status(500).json({
        status: 500,
        message: err
    });
    res.status(200).json({
        status: 200,
        data: allCities
    });
});

}

module.exports = {
  addCity,
  deleteAllCities,
  showAllCities
}

