const request = require("request");


const fetchDescription = function (breedName) {
  breedName = process.argv[2]
  url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error !== undefined) {
      console.log(`Found an error: ${error}`)
    }

    const data = JSON.parse(body);

    breed = data[0]

    if (breed) {
      console.log(breed["description"])
    } else {
      console.log(`Couldn't find that ${breedName} in the database`)
    }

  });
};

fetchDescription();