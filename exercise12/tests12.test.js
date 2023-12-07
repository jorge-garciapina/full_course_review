const { TreeNode, isSymmetric } = require("./solution12");

describe("isSymmetric", () => {
  test("should return true for an empty tree", () => {
    expect(isSymmetric(null)).toBe(true);
  });

  test("should return true for a symmetric tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2, new TreeNode(3), new TreeNode(4));
    root.right = new TreeNode(2, new TreeNode(4), new TreeNode(3));

    expect(isSymmetric(root)).toBe(true);
  });

  test("should return false for a non-symmetric tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2, null, new TreeNode(3));
    root.right = new TreeNode(2, null, new TreeNode(3));

    expect(isSymmetric(root)).toBe(false);
  });
});
