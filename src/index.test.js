const index = require("./index");

describe("index", () => {
  test("should return expected value", () => {
    expect(index()).toEqual({
      comp1: "ss",
      comp2: "emmmm"
    });
  });
});
