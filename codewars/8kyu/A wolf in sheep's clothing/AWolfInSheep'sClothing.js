const warnTheSheep = (queue) => {
  let rvrs = queue.reverse();
  let i = rvrs.indexOf("wolf");
  if (i === 0) {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`;
  }
};
