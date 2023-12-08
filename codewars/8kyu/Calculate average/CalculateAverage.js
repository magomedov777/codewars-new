function findAverage(array) {
  if(!array.length){
    return 0
  }if(array.length){
    return array.reduce((acc, cur) => acc + cur) / array.length
  }
}