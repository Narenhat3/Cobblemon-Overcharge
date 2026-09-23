({
  name: 'Training Wheels',
  spritenum: 130,
  fling: {
    basePower: 50
  },
  onModifySpAPriority: 2,
  onModifySpA(def, pokemon) {
    if (pokemon.baseSpecies.nfe) {
      return this.chainModify(1.5);
    }
  },
  onModifyAtkPriority: 2,
  onModifyAtk(atk, pokemon) {
    if (pokemon.baseSpecies.nfe) {
      return this.chainModify(1.5);
    }
  },
  num: -538,
  gen: 9
})
