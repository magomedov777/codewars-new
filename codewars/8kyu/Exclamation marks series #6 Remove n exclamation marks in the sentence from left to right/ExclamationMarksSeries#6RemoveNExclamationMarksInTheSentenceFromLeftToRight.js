remove = (s, n) => (n > 0 ? remove(s.replace("!", ""), n - 1) : s);
