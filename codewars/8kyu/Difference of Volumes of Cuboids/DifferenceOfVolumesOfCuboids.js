findDifference = (a, b) => Math.abs(a.reduce((prev, curr) => prev * curr) - b.reduce((prev, curr) => prev * curr));
