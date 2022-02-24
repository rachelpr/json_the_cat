//A file used to provide breed description

const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv[2]

fetchBreedDescription(breedName, (error, desc) => {
  console.log(breedName)
  if (error) {
    console.log(`Found an error: ${error}`)
  } else {
    console.log(desc)
  }

  
});

