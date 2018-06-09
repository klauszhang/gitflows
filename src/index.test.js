const index = require('./index');

describe("index", () => {
  test("should return expected value", () => {
    expect(index()).toEqual({
      comp1: 'foo',
      comp2: 'bar'
    });
  });
});
