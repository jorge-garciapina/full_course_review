function flattenArrayRecursive(input) {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      result = result.concat(flattenArrayRecursive(input[i]));
    } else {
      result.push(input[i]);
    }
  }

  return result;
}

module.exports = { flattenArrayRecursive };

// function flattenArrayRecursive(input) {
//   let result = [];

//   for (let i = 0; i < input.length; i++) {
//     if (Array.isArray(input[i])) {
//       result = result.concat(flattenArrayRecursive(input[i]));
//     } else {
//       result.push(input[i]);
//     }
//   }

//   return result;
// }
// const input = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]];

// console.log(flattenArrayRecursive(input)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
