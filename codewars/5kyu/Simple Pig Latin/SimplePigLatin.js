function pigIt(str){
  return str.split(' ').map(el => /^[a-zA-Z]+$/.test(el) ? el.slice(1) + el[0] + 'ay' : el).join(' ')
}