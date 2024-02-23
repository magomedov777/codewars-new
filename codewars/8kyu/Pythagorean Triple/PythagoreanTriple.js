function isPythagoreanTriple(integers) {
  const [x, y, z] = integers.sort((a, b) => a - b);
  return x ** 2 + y ** 2 == z ** 2;
}
