function mergeArrays(largeArray, smallArray) {
  let largeIndex = largeArray.length - smallArray.length - 1;
  let smallIndex = smallArray.length - 1;

  for (let mergeIndex = largeArray.length - 1; mergeIndex >= 0; mergeIndex--) {
    if (smallIndex < 0) {
      break;
    }

    if (largeIndex >= 0 && largeArray[largeIndex] > smallArray[smallIndex]) {
      largeArray[mergeIndex] = largeArray[largeIndex];
      largeIndex--;
    } else {
      largeArray[mergeIndex] = smallArray[smallIndex];
      smallIndex--;
    }
  }
}

module.exports = mergeArrays;
