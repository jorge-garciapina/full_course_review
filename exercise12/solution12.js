// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function isSymmetric(root) {
  if (!root) return true;

  function isMirror(tree1, tree2) {
    if (!tree1 && !tree2) return true;
    if (!tree1 || !tree2) return false;
    return (
      tree1.val === tree2.val &&
      isMirror(tree1.left, tree2.right) &&
      isMirror(tree1.right, tree2.left)
    );
  }

  return isMirror(root.left, root.right);
}

module.exports = { TreeNode, isSymmetric };
