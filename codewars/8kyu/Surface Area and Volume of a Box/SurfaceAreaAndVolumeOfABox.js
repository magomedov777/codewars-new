function getSize(width, height, depth) {
  let volume = width * height * depth;
  let area = 2 * (width * height + width * depth + height * depth);
  let c = [area, volume];
  return c;
}
