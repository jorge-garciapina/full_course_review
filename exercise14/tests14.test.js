const { maximalRectangle } = require("./solution14");

describe("maximalRectangle", () => {
  test("should return the correct maximal rectangle area", () => {
    const matrix = [
      ["0", "0", "0", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0"],
      ["0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
      ["0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "0", "0", "0"],
    ];
    expect(maximalRectangle(matrix)).toBe(22);
  });

  test("should return 0 for an empty matrix", () => {
    expect(maximalRectangle([])).toBe(0);
  });

  test("should return 0 for a matrix with no 1s", () => {
    const matrix = [
      ["0", "0"],
      ["0", "0"],
    ];
    expect(maximalRectangle(matrix)).toBe(0);
  });
});
