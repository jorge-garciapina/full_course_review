// Define the structure of a tree node
function TreeNode(value) {
  this.value = value;
  this.children = [];
}

// Function to add child nodes
TreeNode.prototype.addChild = function (childNode) {
  this.children.push(childNode);
};

module.exports = TreeNode;
