whoIsPaying = (name) => (name.length <= 2 ? [name] : [name, `${name[0]}${name[1]}`]);
