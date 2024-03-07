function flickSwitch(arr) {
  let result = []
  let switchValue = false
  for (let item of arr) {
    if (item === "flick") {
      switchValue = !switchValue
    }
    result.push(!switchValue)
  }
  return result
}
