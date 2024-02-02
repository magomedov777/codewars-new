function lowercaseCount(str) {
  let arr = str.split("");
  let res = arr.filter((el) => el.toLowerCase());
  let x = res.filter((el) => el.toLowerCase() && el !== el.toUpperCase()).length;
  return x;
}
