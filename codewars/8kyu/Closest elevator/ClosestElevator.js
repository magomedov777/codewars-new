function elevator(left, right, call) {
  const leftDist = Math.abs(left - call);
  const rightDist = Math.abs(right - call);
  if (leftDist < rightDist) {
    return "left";
  } else if (leftDist > rightDist) {
    return "right";
  } else {
    return "right";
  }
}
