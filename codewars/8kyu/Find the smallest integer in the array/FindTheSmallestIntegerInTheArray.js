class SmallestIntegerFinder {
  findSmallestInt(args) {
    let minNum = args[0]
    for(let i = 1; i < args.length; i++){
      if(args[i] < minNum){
        minNum = args[i]
      }
    }
    return minNum
  }
}