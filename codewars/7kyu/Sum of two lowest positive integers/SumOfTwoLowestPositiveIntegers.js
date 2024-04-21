function sumTwoSmallestNumbers(numbers) {
  ;[a, b] = numbers.sort((prev, curr) => prev - curr)
  return a + b
}
