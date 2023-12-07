class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function parseTree(str) {
  let index = 0;

  function parseNode() {
    if (index >= str.length || str[index] === ")") {
      return null;
    }

    if (str[index] === "(") {
      index++; // Skip '('
      const node = new TreeNode(str[index++]); // Node value
      index++; // Skip ','

      // Parse left child
      if (str[index] === "(") {
        node.left = parseNode();
      } else {
        // Skip empty left child
        while (str[index] !== "(" && str[index] !== ")") {
          index++;
        }
      }

      // Check for and skip ',' after left child
      if (str[index] === ",") {
        index++;
      }

      // Parse right child
      if (str[index] === "(") {
        node.right = parseNode();
      }

      index++; // Skip closing ')' or move to the next part of the string
      return node;
    }

    return null;
  }

  return parseNode();
}

function preOrder(node, output = []) {
  if (!node) return;
  output.push(node.value);
  preOrder(node.left, output);
  preOrder(node.right, output);
  return output;
}

function inOrder(node, output = []) {
  if (!node) return;
  inOrder(node.left, output);
  output.push(node.value);
  inOrder(node.right, output);
  return output;
}

function postOrder(node, output = []) {
  if (!node) return;
  postOrder(node.left, output);
  postOrder(node.right, output);
  output.push(node.value);
  return output;
}

function printTree(tree, order = "infix") {
  const root = parseTree(tree);
  switch (order) {
    case "prefix":
      return preOrder(root);
    case "infix":
      return inOrder(root);
    case "postfix":
      return postOrder(root);
    default:
      throw new Error("Invalid order type");
  }
}

module.exports = { printTree };
