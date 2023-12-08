function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((acc,curr) => acc + curr) / classPoints.length
  if(yourPoints > sum){
    return true
  }
  return false
}