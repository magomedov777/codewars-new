const add = function (n) {
  const res = (x) => add(n + x);
  res.valueOf = () => n;
  return res;
};
