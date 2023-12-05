//1
function century(year) {
  let century = 100
  return century = Math.floor((year - 1) / 100 + 1)
}

//2
century = (year, _century = 100) => _century = Math.floor((year - 1) / 100 + 1)