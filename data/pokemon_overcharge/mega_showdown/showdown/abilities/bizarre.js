({
  name: "Bizarre",
  rating: 3.5,
  flags: { breakable: 1 },
  onStart(pokemon) {
    const bizarreCount = this.getAllActive().filter(mon => mon?.hasAbility(['bizarre'])).length;
    if (bizarreCount % 2 === 0) return;
    this.add('-ability', pokemon, 'Bizarre');
    this.add('-activate', pokemon, 'Bizarre');
  },
  onEnd(pokemon) {
    const remaining = this.getAllActive().filter(mon => mon?.hasAbility(['bizarre']) && mon !== pokemon).length;
    if (remaining % 2 !== 0) return;
    this.add('-end', pokemon, 'Bizarre');
  },
  onAnyModifyMove(move, attacker, defender) {
    if (move.category === 'Status') return;
    move.ignoreImmunity = Object.fromEntries(this.dex.types.names().map(t => [t, true]));
    const immunityExceptions = {
      Ground: {
        abilities: ['levitate', 'eelevate'],
        items: ['airballoon'],
      },
    };
    const exception = defender && immunityExceptions[move.type];
    if (exception && (defender.hasAbility(exception.abilities) || defender.hasItem(exception.items))) {
      move.ignoreImmunity[move.type] = false;
    }
  },
  onAnyEffectiveness(typeMod, target, type, move) {
    if (!move || move.category === 'Status') return;
    if (this.getAllActive().filter(mon => mon?.hasAbility(['bizarre'])).length % 2 === 0) return;
    if (typeMod === 0) {
      const typeData = this.dex.types.get(type);
      const isNaturallyImmune = typeData.exists && move.type in typeData.damageTaken && typeData.damageTaken[move.type] === 3;
      if (isNaturallyImmune) return 1;
      return;
    }
    return -typeMod;
  }
})