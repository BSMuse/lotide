const assert = require('chai').assert;
const middle = require('../middle') 

describe("#head", () => {
  it("returns [lol] for [test, lol, this]", () => {
    assert.deepEqual(middle(['test','lol','this']),['lol']);
  });

  it("returns [6] for [5,6,7]", () => {
    assert.deepEqual(middle([5,6,7]),[6]); 
  });
});

