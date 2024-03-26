function nextItem(xs, item) {
  let fin = false
  for (let a of xs) {
    if (fin) return a
    if (a === item) fin = true
  }
}
