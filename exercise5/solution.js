function reverseBlocks(arr, blockSize) {
  for (let start = 0; start < arr.length; start += blockSize) {
    let end = Math.min(start + blockSize - 1, arr.length - 1);
    let tempStart = start; 
    while (tempStart < end) {
      [arr[tempStart], arr[end]] = [arr[end], arr[tempStart]];
      tempStart++;
      end--;
    }
  }
  return arr;
}

module.exports = reverseBlocks;
