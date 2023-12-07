const mergeArrays = require("./solution");

describe("mergeArrays", () => {
  test("merges arrays correctly", () => {
    const largeArray = [1, 3, 5].concat(new Array(3));
    const smallArray = [2, 4, 6];
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("handles empty largeArray correctly", () => {
    const largeArray = [].concat(new Array(3));
    const smallArray = [1, 2, 3];
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([1, 2, 3]);
  });

  test("handles empty smallArray correctly", () => {
    const largeArray = [1, 2, 3].concat(new Array(3));
    const smallArray = [];
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual([1, 2, 3, undefined, undefined, undefined]);
  });

  test("preserves largeArray length", () => {
    const largeArray = [1, 2, 3].concat(new Array(3));
    const smallArray = [4, 5, 6];
    mergeArrays(largeArray, smallArray);
    expect(largeArray.length).toBe(6);
  });
});
