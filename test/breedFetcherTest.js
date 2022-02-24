const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Tonkinese", (error, desc) => {
      assert.equal(error, null);

      const expectedDesc = "Intelligent and generous with their affection, a Tonkinese will supervise all activities with curiosity. Loving, social, active, playful, yet content to be a lap cat"

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it("returns a string to indicate no breed has been found, via callback", (done) => {
    fetchBreedDescription("Tuxedo", (error, desc) => {

      assert.equal(desc, null);

      done();
    });
  });
});