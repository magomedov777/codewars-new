squareDigits = (num) =>
  +String(num)
    .split('')
    .map((el) => el ** 2)
    .join('')
