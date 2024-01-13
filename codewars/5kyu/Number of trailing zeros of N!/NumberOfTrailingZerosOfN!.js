const zeros = (x) => {
  let o = 0;
  while (x > 0) {
    x = parseInt(x / 5);
    o += x;
  }
  return o;
};
