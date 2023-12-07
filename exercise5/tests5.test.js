const reverseBlocks = require("./solution");

describe("reverseBlocks", () => {
  test("correctly reverses blocks of the array", () => {
    expect(reverseBlocks([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([
      2, 1, 0, 5, 4, 3, 8, 7, 6, 9,
    ]);
  });

  test("handles block size equal to array length", () => {
    expect(reverseBlocks([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toEqual([
      9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
    ]);
  });

  test("handles block size larger than array length", () => {
    expect(reverseBlocks([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 12)).toEqual([
      9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
    ]);
  });

  test("handles block size of 1 (no change)", () => {
    expect(reverseBlocks([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1)).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  test("handles empty array", () => {
    expect(reverseBlocks([], 3)).toEqual([]);
  });
});
