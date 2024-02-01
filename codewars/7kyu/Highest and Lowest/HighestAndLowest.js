function highAndLow(numbers) {
  let x = numbers.split(" ");
  let maxVal = Math.max(...x);
  let minVal = Math.min(...x);
  return `${maxVal} ${minVal}`;
}
