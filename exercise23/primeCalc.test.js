const findPrimes = require("./primeCalc");

describe("findPrimes", () => {
  test("should return first 5 prime numbers", () => {
    expect(findPrimes(5)).toEqual([2, 3, 5, 7, 11]);
  });

  test("should return an empty array for n = 0", () => {
    expect(findPrimes(0)).toEqual([]);
  });

  test("should return only [2] for n = 1", () => {
    expect(findPrimes(1)).toEqual([2]);
  });
});
