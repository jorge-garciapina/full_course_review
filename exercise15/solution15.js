function findBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Sum from 0 to current index
    let leftSum = 0;
    for (let j = 0; j <= i; j++) {
      leftSum += arr[j];
    }

    // Sum from next index to the end
    let rightSum = 0;
    for (let j = i + 1; j < arr.length; j++) {
      rightSum += arr[j];
    }

    console.log(leftSum, rightSum);

    // Compare the two sums
    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

module.exports = findBalanceIndex;
