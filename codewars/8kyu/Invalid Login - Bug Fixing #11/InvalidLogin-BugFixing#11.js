validate = (username, password) =>
  username.includes('||') || password.includes('||')
    ? 'Wrong username or password!'
    : new Database().login(username, password)
