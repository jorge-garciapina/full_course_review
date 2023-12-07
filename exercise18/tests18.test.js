const set = require("./solution18");

describe("set function", () => {
  test("should correctly set a deeply nested property", () => {
    const obj = {};
    set(obj, "path.to.deeply.nested.property", 42);
    expect(obj.path.to.deeply.nested.property).toBe(42);
  });

  test("should create nested objects if they do not exist", () => {
    const obj = {};
    set(obj, "a.b.c", "value");
    expect(obj.a.b.c).toBe("value");
  });

  test("should throw an error if path is not a string", () => {
    const obj = {};
    expect(() => {
      set(obj, null, "value");
    }).toThrow("Path must be a string");
  });
});
