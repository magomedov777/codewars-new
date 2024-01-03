const longestSlideDown = (pyramid) =>
  pyramid.reduceRight((acc, curr) => curr.map((el, i) => el + Math.max(acc[i], acc[i + 1])))[0];
