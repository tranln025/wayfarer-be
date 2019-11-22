const db = require('./models');

const cityList = [
  {
    name: "San Franciso",
    photo: "https://cdn.aarp.net/content/dam/aarp/travel/destination-guides/2018/04/1140-travel-destination-san-francisco-main-page.imgcache.rev2e8bf9592b441099e8e7efb70e1c1e4b.web.650.370.jpg",
    country: "United States"
  },
  {
    name: "Sydney",
    photo: "https://lp-cms-production.imgix.net/2019-06/65830387.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4",
    country: "Australia"
  },
  {
    name: "London",
    photo: "https://cdn.londonandpartners.com/visit/london-organisations/houses-of-parliament/63950-640x360-london-icons2-640.jpg",
    country: "United Kingdom"
  },
  {
    name: "Seattle",
    photo: "https://www.citizenm.com/cache/images/seattle_city_image_1200x675-1_004b02a34b02a3.jpg",
    country: "United States"
  },
  {
    name: "Berlin",
    photo: "https://www.citizenm.com/cache/images/seattle_city_image_1200x675-1_004b02a34b02a3.jpg",
    country: "Germany"
  },
  {
    name: "Florence",
    photo: "https://www.citizenm.com/cache/images/seattle_city_image_1200x675-1_004b02a34b02a3.jpg",
    country: "Italy"
  },
  {
    name: "Vienna",
    photo: "https://www.citizenm.com/cache/images/seattle_city_image_1200x675-1_004b02a34b02a3.jpg",
    country: "Austria"
  },
  {
    name: "Hong Kong",
    photo: "https://www.citizenm.com/cache/images/seattle_city_image_1200x675-1_004b02a34b02a3.jpg",
    country: "Hong Kong"
  },
  {
    name: "Bankok",
    photo: "https://www.citizenm.com/cache/images/seattle_city_image_1200x675-1_004b02a34b02a3.jpg",
    country: "Thailand"
  },
  {
    name: "Winnipeg",
    photo: "https://www.citizenm.com/cache/images/seattle_city_image_1200x675-1_004b02a34b02a3.jpg",
    country: "Canada"
  }
];

// db.City.deleteMany({}, (err, cities) => {
//   if (err) {
//     return console.log("Error occurred in removing all cities", err);
//   } else {
//     console.log("Succesfully removed all cities from database.");
//     db.City.create(cityList), (err, createdCities) => {
//       if (err) {
//         return console.log("Error occurred in seeding cities", err);
//       };
//       console.log("Successfully seeded cities database.");
//       process.exit();
//     }
//   }
// })

db.City.remove({}, () => {
	cityList.forEach(city => {
		db.City.create(city, (error, createdCity) => {
			if (error) return console.log(error);
			console.log(createdCity);
		});
	});
});