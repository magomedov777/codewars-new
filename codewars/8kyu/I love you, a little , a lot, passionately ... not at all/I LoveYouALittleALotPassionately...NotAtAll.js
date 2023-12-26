function howMuchILoveYou(nbPetals) {
  let x = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  let y = (nbPetals % 6) - 1;
  if (y === -1) {
    y = x.length - 1;
  }
  return x[y];
}
