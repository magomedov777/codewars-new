function evil(n) {
  if (n.toString(2).match(/1/g).length % 2) return "It's Odious!";
  else return "It's Evil!";
}
