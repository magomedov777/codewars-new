//1
function checkAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}
//2
checkAlive = (health) => (health <= 0 ? false : true);
