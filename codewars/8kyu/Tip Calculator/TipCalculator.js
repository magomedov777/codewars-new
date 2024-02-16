let tip = {
  terrible: 0.0,
  poor: 0.05,
  good: 0.1,
  great: 0.15,
  excellent: 0.2,
};

function calculateTip(a, r) {
  r = r.toLowerCase();
  return r in tip ? Math.ceil(tip[r] * a) : "Rating not recognised";
}
