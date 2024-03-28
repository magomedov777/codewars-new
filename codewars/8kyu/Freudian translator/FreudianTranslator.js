toFreud = (string) =>
  string ? 'sex '.repeat(string.split(' ').length).slice(0, -1) : string
