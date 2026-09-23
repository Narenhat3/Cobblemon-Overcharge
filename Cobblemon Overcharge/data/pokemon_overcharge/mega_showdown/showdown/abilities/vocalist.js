({
  name: 'Vocalist',
  rating: 4,
  flags: {},
  onModifyPriority(priority, pokemon, target, move) {
    if (!move.flags?.sound) return;
    return priority + 1;
  }
})
