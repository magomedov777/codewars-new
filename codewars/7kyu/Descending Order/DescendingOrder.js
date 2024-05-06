descendingOrder = (n) =>
  n === 0
    ? 0
    : +String(n)
        .split('')
        .sort((a, b) => b - a)
        .join('')
