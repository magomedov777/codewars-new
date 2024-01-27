var Ball = function (ballType) {
  if (!ballType) return (this.ballType = "regular");
  else return (this.ballType = ballType);
};
