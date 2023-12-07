//1 
function paperwork(n, m) {
  if(n < 0 | m < 0){
    return 0
  }
  return n * m
}

//2
paperwork = (n, m) => n < 0 | m < 0 ? 0 : n * m