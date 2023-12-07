// // Define the structure of a tree node
// function TreeNode(value) {
//   this.value = value;
//   this.children = [];
// }

// // Function to add child nodes
// TreeNode.prototype.addChild = function (childNode) {
//   this.children.push(childNode);
// };

// // Example usage:
// let root = new TreeNode(0);
// // LAYER 1
// let child1_1 = new TreeNode(1);
// let child2_1 = new TreeNode(2);
// let child3_1 = new TreeNode(3);
// let child5_1 = new TreeNode(5);
// let child7_1 = new TreeNode(7);
// root.addChild(child1_1);
// root.addChild(child2_1);
// root.addChild(child3_1);
// root.addChild(child5_1);
// root.addChild(child7_1);

// // LAYER 2
// let child1_2 = new TreeNode(1);
// let child5_2 = new TreeNode(5);
// child2_1.addChild(child1_2);
// child2_1.addChild(child5_2);

// let child0_2 = new TreeNode(0);
// child3_1.addChild(child0_2);

// let child3_2 = new TreeNode(3);
// child7_1.addChild(child3_2);

// // LAYER 3
// let child3_3 = new TreeNode(3);
// let child5_3 = new TreeNode(5);
// let child9_3 = new TreeNode(9);
// child5_2.addChild(child3_3);
// child5_2.addChild(child5_3);
// child5_2.addChild(child9_3);

// let child3b_3 = new TreeNode(3);
// let child0_3 = new TreeNode(0);
// child3_2.addChild(child3b_3);
// child3_2.addChild(child0_3);

// // LAYER 4
// let child6_4 = new TreeNode(6);
// child5_3.addChild(child6_4);

// let child9_4 = new TreeNode(9);
// let child4_4 = new TreeNode(4);
// child0_3.addChild(child9_4);
// child0_3.addChild(child4_4);

function isSameLevel(root, n1, n2) {
  if (!root) return false;

  let queue = [root];
  while (queue.length > 0) {
    let levelSize = queue.length;
    let countN1 = 0,
      countN2 = 0;

    // Process each level
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      // Count occurrences of n1 and n2 on the current level
      if (node.value === n1) countN1++;
      if (node.value === n2) countN2++;

      // Add children to the queue for next level
      for (let child of node.children) {
        queue.push(child);
      }
    }

    // If n1 and n2 are the same, check if the count is at least 2
    if (n1 === n2 && countN1 >= 2) return true;

    // If n1 and n2 are different, check if both are found
    if (n1 !== n2 && countN1 > 0 && countN2 > 0) return true;
  }

  // If we exit the loop, the conditions were never met
  return false;
}

module.exports = isSameLevel;

// // Example usage
// console.log(isSameLevel(root, 1, 1)); // Should be false
// console.log(isSameLevel(root, 3, 3)); // Should be true
// console.log(isSameLevel(root, 5, 5)); // Should be false
