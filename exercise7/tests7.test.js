const longestRunOfTwoNumbers = require("./solution");

describe("longestRunOfTwoNumbers", () => {
  test("should return the longest run of at most two distinct numbers", () => {
    expect(longestRunOfTwoNumbers("1212223311212223")).toBe("1121222");
    expect(longestRunOfTwoNumbers("111")).toBe("111");
    expect(longestRunOfTwoNumbers("1235412354")).toBe("12");
    expect(longestRunOfTwoNumbers("22233111")).toBe("22233");
  });

  test("should handle empty string", () => {
    expect(longestRunOfTwoNumbers("")).toBe("");
  });

  test("should handle string with all identical numbers", () => {
    expect(longestRunOfTwoNumbers("222222")).toBe("222222");
  });

  test("should handle string with exactly two distinct numbers", () => {
    expect(longestRunOfTwoNumbers("121212")).toBe("121212");
  });

  test("should handle single character strings", () => {
    expect(longestRunOfTwoNumbers("1")).toBe("1");
  });
});
