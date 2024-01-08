//1
function combat(health, damage) {
  if (health > damage) return health - damage;
  if (damage >= health) return 0;
}

//2
combat = (health, damage) => (health > damage ? health - damage : 0);
