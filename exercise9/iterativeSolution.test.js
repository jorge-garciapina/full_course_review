const { flattenArrayIterative } = require("./iterativeSolution");

describe("flattenArrayIterative", () => {
  test("flattens a nested array", () => {
    expect(flattenArrayIterative([1, [2, [3, 4], 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles an empty array", () => {
    expect(flattenArrayIterative([])).toEqual([]);
  });

  test("handles an array with no nesting", () => {
    expect(flattenArrayIterative([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("handles arrays with complex nesting", () => {
    expect(flattenArrayIterative([1, [2, [3, [4, [5]]]]])).toEqual([
      1, 2, 3, 4, 5,
    ]);
  });
});
