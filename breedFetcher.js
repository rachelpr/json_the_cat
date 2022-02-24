const request = require("request");


const fetchBreedDescription = function (breedName, callback) {

  url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {

    const data = JSON.parse(body);

    breed = data[0]
    if (breed) {
      callback(error, breed["description"])
    } else {
      callback(`Couldn't find that breed, ${breedName}, in the database`)
    }

  });
};

module.exports = { fetchBreedDescription }