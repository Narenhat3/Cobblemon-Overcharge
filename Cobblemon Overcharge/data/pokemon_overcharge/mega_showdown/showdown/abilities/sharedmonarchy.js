({
  onBasePowerPriority: 30,
  onBasePower(basePower, attacker, defender, move) {
    const boostedTypes = ['Dragon', 'Fairy'];
    if (boostedTypes.includes(move.type)) {
      if (this.modify(basePower, this.event.modifier) <= 60) {
        return this.chainModify(1.7);
      }
    }
  },
  flags: {},
  name: 'Shared Monarchy',
  rating: 4
})