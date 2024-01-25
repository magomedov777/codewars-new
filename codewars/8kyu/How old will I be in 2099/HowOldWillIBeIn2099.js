const calculateAge = (bornYear, futureYear) => {
  let res = futureYear - bornYear;
  if (res > 1) {
    return `You are ${res} years old.`;
  } else if (res < 0) {
    if (Math.abs(res) === 1) {
      return `You will be born in 1 year.`;
    } else {
      return `You will be born in ${Math.abs(res)} years.`;
    }
  } else if (res === 0) {
    return "You were born this very year!";
  } else if (res === 1) {
    return `You are ${res} year old.`;
  }
};
