sumStrings = (x, y) => (isNaN(parseInt(x)) ? y : isNaN(parseInt(y)) ? x : String(BigInt(x) + BigInt(y)));
