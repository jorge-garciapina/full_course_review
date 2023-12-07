function flattenArrayIterative(input) {
  let stack = [...input];
  let result = [];

  while (stack.length > 0) {
    const next = stack.pop();

    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }

  return result.reverse();
}

module.exports = { flattenArrayIterative };

// function flattenArrayIterative(input) {
//   let stack = [...input];
//   let result = [];

//   while (stack.length > 0) {
//     const next = stack.pop();

//     if (Array.isArray(next)) {
//       stack.push(...next);
//     } else {
//       result.push(next);
//     }
//   }

//   return result.reverse();
// }

// const input = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]];

// console.log(flattenArrayIterative(input)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
