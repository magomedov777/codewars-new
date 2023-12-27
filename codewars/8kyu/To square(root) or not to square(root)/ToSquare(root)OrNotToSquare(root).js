squareOrSquareRoot = (array) => array.map((el) => (Math.sqrt(el) % 1 ? el * el : Math.sqrt(el)));
