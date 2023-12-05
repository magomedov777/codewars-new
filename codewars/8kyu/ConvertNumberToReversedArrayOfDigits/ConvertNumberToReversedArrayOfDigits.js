//1
function digitize(n) {
  let str = n.toString()
  let arr = str.split('')
  let res = arr.map(el => +el)
  return res.reverse()
}

//2
digitize = n => n.toString().split('').reverse().map(el => +el)
