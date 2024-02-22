function uniTotal(string) {
  return string
    .split("")
    .map((el) => el.charCodeAt(0))
    .reduce((a, b) => a + b, 0);
}
