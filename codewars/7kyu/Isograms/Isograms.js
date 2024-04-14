function isIsogram(str) {
  let x = new Set(str.toLowerCase())
  if (str.length === x.size) {
    return true
  }
  return false
}
