billboard = (name, price = 30) => [...new Array(name.length)].fill(price).reduce((a, b) => a + b, 0);
