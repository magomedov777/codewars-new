function sumOfDifferences(arr) {
  let x = arr.slice().sort((a, b) => a - b);
  let sum = 0;
  for (let i = 1; i < x.length; i++) {
    sum += x[i] - x[i - 1];
  }
  return sum;
}
