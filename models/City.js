const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'City name is required'],
    },
    country: {
        type: String,
        require: [true, 'Country name is required'],
    },
    photo: String,
    country: {
        type: String,
        require: [true, 'Country is required']
    }
})

const City = mongoose.model('City', CitySchema);

module.exports = City;
