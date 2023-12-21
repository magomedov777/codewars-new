String.prototype.toAlternatingCase = function () {
  let str = "";
  for (let char of this)
    if (char === char.toUpperCase()) {
      str += char.toLowerCase();
    } else {
      if (char === char.toLowerCase()) str += char.toUpperCase();
    }
  return str;
};
