const LinkedList = require("./solution17");

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("identifies a single character as a palindrome", () => {
    list.add("a");
    expect(list.isPalindrome()).toBe(true);
  });

  test("identifies an empty string as a palindrome", () => {
    expect(list.isPalindrome()).toBe(true);
  });

  test("identifies a palindrome with odd number of characters", () => {
    list.add("r");
    list.add("a");
    list.add("d");
    list.add("a");
    list.add("r");
    expect(list.isPalindrome()).toBe(true);
  });

  test("identifies a palindrome with even number of characters", () => {
    list.add("a");
    list.add("b");
    list.add("b");
    list.add("a");
    expect(list.isPalindrome()).toBe(true);
  });

  test("identifies a non-palindrome list", () => {
    list.add("a");
    list.add("b");
    expect(list.isPalindrome()).toBe(false);
  });

  test("identifies a non-palindrome list with more characters", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    expect(list.isPalindrome()).toBe(false);
  });
});
