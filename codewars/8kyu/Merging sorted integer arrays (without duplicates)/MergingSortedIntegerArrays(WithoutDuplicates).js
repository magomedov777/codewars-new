function mergeArrays(a, b) {
  const newA = Array.from(new Set(a))
  const newB = Array.from(new Set(b))
  const arr = newA.concat(newB)
  const uniqueArr = arr.filter((value, index, self) => {
    return self.indexOf(value) === index
  })
  return uniqueArr.sort((a, b) => a - b)
}
