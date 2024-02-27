function drawStairs(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res[i] = `${" ".repeat(i)}I`;
  }
  return res.join("\n");
}
