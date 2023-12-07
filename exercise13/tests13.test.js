const TreeNode = require("./TreeNode");
const isSameLevel = require("./solution13");

describe("isSameLevel function", () => {
  let root;
  beforeAll(() => {
    // Example usage:
    root = new TreeNode(0);
    // LAYER 1
    let child1_1 = new TreeNode(1);
    let child2_1 = new TreeNode(2);
    let child3_1 = new TreeNode(3);
    let child5_1 = new TreeNode(5);
    let child7_1 = new TreeNode(7);
    root.addChild(child1_1);
    root.addChild(child2_1);
    root.addChild(child3_1);
    root.addChild(child5_1);
    root.addChild(child7_1);

    // LAYER 2
    let child1_2 = new TreeNode(1);
    let child5_2 = new TreeNode(5);
    child2_1.addChild(child1_2);
    child2_1.addChild(child5_2);

    let child0_2 = new TreeNode(0);
    child3_1.addChild(child0_2);

    let child3_2 = new TreeNode(3);
    child7_1.addChild(child3_2);

    // LAYER 3
    let child3_3 = new TreeNode(3);
    let child5_3 = new TreeNode(5);
    let child9_3 = new TreeNode(9);
    child5_2.addChild(child3_3);
    child5_2.addChild(child5_3);
    child5_2.addChild(child9_3);

    let child3b_3 = new TreeNode(3);
    let child0_3 = new TreeNode(0);
    child3_2.addChild(child3b_3);
    child3_2.addChild(child0_3);

    // LAYER 4
    let child6_4 = new TreeNode(6);
    child5_3.addChild(child6_4);

    let child9_4 = new TreeNode(9);
    let child4_4 = new TreeNode(4);
    child0_3.addChild(child9_4);
    child0_3.addChild(child4_4);
  });

  test("should find numbers at the same level", () => {
    expect(isSameLevel(root, 3, 3)).toBe(true);
  });

  test("should not find same numbers if they are not at the same level", () => {
    expect(isSameLevel(root, 1, 1)).toBe(false);
  });

  test("should handle empty tree", () => {
    const emptyRoot = new TreeNode();
    expect(isSameLevel(emptyRoot, 1, 1)).toBe(false);
  });
});
