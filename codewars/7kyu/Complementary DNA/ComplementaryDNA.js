function dnaStrand(dna) {
  const char = { A: 'T', T: 'A', C: 'G', G: 'C' }
  return dna.replace(/./g, (x) => char[x])
}
