const request = require("request");


const fetchBreedDescription = function (breedName, callback) {

  url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {

    const data = JSON.parse(body);

    breed = data[0]
    if (breed) {
      callback(breed["description"])
    } else {
      callback(`Couldn't find that ${breedName} in the database`)
    }

  });
};

module.exports = { fetchBreedDescription }