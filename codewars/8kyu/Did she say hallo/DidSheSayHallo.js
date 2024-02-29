function validateHello(greetings) {
  return /hello|ciao|salut|hallo|hola|ahoj|czesc/g.test(greetings.toLowerCase());
}
