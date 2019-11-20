const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'City name is required'],
    },
    photo: String,

})

const City = mongoose.model('City', CitySchema);

module.exports = City;
