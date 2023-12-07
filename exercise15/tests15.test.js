const findBalanceIndex = require("./solution15");

describe("findBalanceIndex", () => {
  test("finds correct balance index in a standard case", () => {
    expect(findBalanceIndex([1, 2, 3, 4, 9, 9, 2, 7, 10, 13])).toBe(6);
  });

  test("returns -1 when no balance index exists", () => {
    expect(findBalanceIndex([1, 2, 3, 4, 5])).toBe(-1);
  });

  test("works with an array having a single element", () => {
    expect(findBalanceIndex([1])).toBe(-1);
  });

  test("works with an empty array", () => {
    expect(findBalanceIndex([])).toBe(-1);
  });

  test("works with negative numbers", () => {
    expect(findBalanceIndex([-1, -2, 1, 2, 0])).toBe(3);
  });
});
