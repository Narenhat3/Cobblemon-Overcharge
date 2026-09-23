({
  name: 'Ear Muffs',
  fling: {
    basePower: 80
  },
  onSourceBasePower(basePower, attacker, defender, move) {
    if (move.flags['sound']) {
      return this.chainModify(0.5);
    }
  },
  gen: 9
})
