function startingMark(bodyHeight) {
  let x = (10.67 - 9.45) / (1.83 - 1.52)
  return Math.round((10.67 + x * bodyHeight - x * 1.83) * 100) / 100
}
