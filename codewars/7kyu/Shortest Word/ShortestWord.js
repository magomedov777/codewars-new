findShort = (s) =>
  Math.min.apply(
    this,
    s.split(' ').map((el) => el.length)
  )
