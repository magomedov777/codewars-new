function array(string) {
  if (string.length === 0 || string.split(",").length <= 2) return null;
  let x = string.split(",");
  x.shift();
  x.pop();
  let y = x.join(" ");
  return y;
}
