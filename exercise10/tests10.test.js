const { printTree } = require("./solution10");

describe("Binary Tree Traversal", () => {
  const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";

  test("Prefix Order Traversal", () => {
    expect(printTree(bTree, "prefix")).toEqual([
      "A",
      "B",
      "D",
      "E",
      "C",
      "F",
      "H",
      "I",
      "G",
      "J",
    ]);
  });

  test("Infix Order Traversal", () => {
    expect(printTree(bTree, "infix")).toEqual([
      "D",
      "E",
      "B",
      "H",
      "I",
      "F",
      "G",
      "J",
      "C",
      "A",
    ]);
  });

  test("Postfix Order Traversal", () => {
    expect(printTree(bTree, "postfix")).toEqual([
      "E",
      "D",
      "I",
      "H",
      "J",
      "G",
      "F",
      "C",
      "B",
      "A",
    ]);
  });

  test("Invalid Order Type", () => {
    expect(() => printTree(bTree, "invalid")).toThrow("Invalid order type");
  });
});
