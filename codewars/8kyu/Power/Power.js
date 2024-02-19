function numberToPower(number, power) {
  let res = 1;
  for (let i = 1; i <= power; i++) {
    res = res * number;
  }
  return res;
}
