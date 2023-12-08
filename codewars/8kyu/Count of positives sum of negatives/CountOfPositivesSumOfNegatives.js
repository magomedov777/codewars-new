function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }
  let arr = [];
  arr.push(input.filter(el => el > 0).length);
  arr.push(input.filter(el => el < 0).reduce((acc, curr) => acc + curr, 0));

  return arr;
}