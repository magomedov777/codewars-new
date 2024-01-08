//1
function noBoringZeros(n) {
  let x = String(n).replace(/0*$/, "");
  let y = +x;
  return y;
}

//2
noBoringZeros = (n) => +String(n).replace(/0*$/, "");
