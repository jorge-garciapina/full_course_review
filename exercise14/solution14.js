function maximalRectangle(matrix) {
  if (matrix.length === 0) return 0;
  let maxArea = 0;
  const dp = Array(matrix[0].length).fill(0);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      // Update the state of this row's histogram using the last row's histogram
      // by adding 1 if this is a '1' or resetting to 0 if it's a '0'.
      dp[j] = matrix[i][j] === "1" ? dp[j] + 1 : 0;
    }
    // Update maxArea with the maximum area from this row's histogram.
    maxArea = Math.max(maxArea, largestRectangleArea(dp));
  }
  return maxArea;
}

function largestRectangleArea(heights) {
  let maxArea = 0;
  const stack = [];

  for (let i = 0; i <= heights.length; i++) {
    const height = i === heights.length ? 0 : heights[i];
    while (stack.length && heights[stack[stack.length - 1]] > height) {
      const stackHeight = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, stackHeight * width);
    }
    stack.push(i);
  }
  return maxArea;
}

module.exports = { maximalRectangle };
