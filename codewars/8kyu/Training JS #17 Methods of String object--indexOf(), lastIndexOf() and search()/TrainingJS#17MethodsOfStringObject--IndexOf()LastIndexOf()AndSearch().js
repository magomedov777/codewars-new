firstToLast = (str, c) =>
  str.indexOf(c) < 0 ? -1 : str.lastIndexOf(c) - str.indexOf(c)
