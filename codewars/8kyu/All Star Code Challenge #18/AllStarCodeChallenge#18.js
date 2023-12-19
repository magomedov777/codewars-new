function strCount(str, letter){  
  let res = 0
  for(let i = 0; i < str.length; i++){
    if(str[i] === letter){
      res++
    }
  }
  return res
}