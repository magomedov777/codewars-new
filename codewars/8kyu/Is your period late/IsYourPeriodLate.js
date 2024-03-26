periodIsLate = (last, today, cycleLength) =>
  (today.getTime() - last.getTime()) / 86400000 > cycleLength
