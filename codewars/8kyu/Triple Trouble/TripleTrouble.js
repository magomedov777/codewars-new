function tripleTrouble(one, two, three) {
  let res = [];
  for (let i = 0; i < one.length; i++) {
    res.push(one[i], two[i], three[i]);
  }
  return res.join("");
}
