function well(x) {
  const good = x.filter((el) => el === "good").length;
  return good === 0 ? "Fail!" : good <= 2 ? "Publish!" : "I smell a series!";
}
