let result = []
function sum(n, m = n) {
  if (n == 0) return 1
  if (n < 0 || m == 0) return 0
  if (result[n] && result[n][m]) return result[n][m]
  let comp = sum(n, m - 1) + sum(n - m, m)
  if (!result[n]) {
    result[n] = []
  }
  result[n][m] = comp
  return comp
}
