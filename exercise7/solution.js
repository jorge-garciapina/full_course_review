function longestRunOfTwoNumbers(input) {
  let maxLen = 0;
  let start = 0;
  let longestSubstr = "";
  const count = new Map();

  for (let end = 0; end < input.length; end++) {
    const endChar = input[end];
    count.set(endChar, (count.get(endChar) || 0) + 1);

    while (count.size > 2) {
      const startChar = input[start];
      count.set(startChar, count.get(startChar) - 1);

      if (count.get(startChar) === 0) {
        count.delete(startChar);
      }

      start++;
    }

    if (end - start + 1 > maxLen) {
      maxLen = end - start + 1;
      longestSubstr = input.substring(start, end + 1);
    }
  }

  return longestSubstr;
}

module.exports = longestRunOfTwoNumbers;

// // Test the function with the provided examples
// console.log(longestRunOfTwoNumbers("1212223311212223")); // Output: "1121222"
// console.log(longestRunOfTwoNumbers("111")); // Output: "111"
