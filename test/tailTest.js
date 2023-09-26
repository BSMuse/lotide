const assert = require('chai').assert;
const tail = require('../tail')

describe("#tail", () => {
  it("returns Labs for ['Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Lighthouse", "Labs"]), 'Labs');
  });
});
