const { assert } = require("chai");
const index = require("../index");

describe("App", () => {
  it("Should return hello", () => {
    assert.equal(index.hello(), "hello");
  })
  it("Should return 5 length letter", () => {
    assert.lengthOf(index.hello(), 5);
  })
  it("Should return type string", () => {
    assert.typeOf(index.hello(), "string");
  })
  it("Sum should be greater than 5", () => {
    assert.isAbove(index.sum(), 5);
  })
  it("Should return testing", () => {
    assert.equal(index.testing(), "testing");
  })

})