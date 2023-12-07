const { flattenArrayRecursive } = require("./recursiveSolution");

describe("flattenArrayRecursive", () => {
  test("flattens a nested array", () => {
    expect(flattenArrayRecursive([1, [2, [3, 4], 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles an empty array", () => {
    expect(flattenArrayRecursive([])).toEqual([]);
  });

  test("handles an array with no nesting", () => {
    expect(flattenArrayRecursive([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("handles arrays with complex nesting", () => {
    expect(flattenArrayRecursive([1, [2, [3, [4, [5]]]]])).toEqual([
      1, 2, 3, 4, 5,
    ]);
  });
});
