const transformToNumber = require("./numbers");

it("should transform a string input to a number", () => {
  const input = "1";
  const result = transformToNumber(input);
  expect(result).toBe(+input);
});

it("it should yield NaN for a non-transformable value", () => {
  const input = "value";
  const result = transformToNumber(input);
  expect(result).toBeNaN();
});
