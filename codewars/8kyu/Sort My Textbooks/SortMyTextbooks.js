function sorter(textbooks) {
  return textbooks.sort((a, b) => {
    const lowerA = a.toLowerCase()
    const lowerB = b.toLowerCase()
    if (lowerA < lowerB) {
      return -1
    }
    if (lowerA > lowerB) {
      return 1
    }
    return lowerA.localeCompare(lowerB)
  })
}
