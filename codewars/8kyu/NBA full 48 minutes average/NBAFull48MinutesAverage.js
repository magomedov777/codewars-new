let pointsPer48 = (ppg, mpg) =>
  ppg === 0 && mpg === 0 ? 0 : +((ppg / mpg) * 48).toFixed(1)
