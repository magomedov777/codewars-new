function mergeArrays(arr1, arr2) {
  let unionArray = arr1.concat(arr2);
  if (arr1.length === 0) {
    return arr2.slice().sort((a, b) => a - b);
  } else if (arr2.length === 0) {
    return arr1.slice().sort((a, b) => a - b);
  } else {
    return unionArray.sort((a, b) => a - b).filter((i, index, el) => el.indexOf(i) === index);
  }
}
