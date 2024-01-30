stairsIn20 = (s) => 20 * s.reduce((a, b) => a + b.reduce((c, d) => c + d), 0);
