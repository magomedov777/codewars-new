function arrayMadness(a, b) {
  let x = a.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
  let y = b.reduce((acc, curr) => acc + Math.pow(curr, 3), 0);
  if (x > y) {
    return true;
  }
  return false;
}
