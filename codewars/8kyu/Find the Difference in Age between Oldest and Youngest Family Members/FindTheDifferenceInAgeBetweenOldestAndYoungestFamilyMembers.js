function differenceInAges(ages) {
  let min = Math.min.apply(null, ages);
  let max = Math.max.apply(null, ages);
  let diff = max - min;
  return [min, max, diff];
}
