({
  name: 'Old Shield',
  spritenum: 581,
  fling: {
    basePower: 80
  },
  onModifyDefPriority: 1,
  onModifyDef(def) {
    return this.chainModify(1.5);
  },
  onDisableMove(pokemon) {
    for (const moveSlot of pokemon.moveSlots) {
      const move = this.dex.moves.get(moveSlot.id);
      if (move.category === 'Status' && move.id !== 'mefirst') {
        pokemon.disableMove(moveSlot.id);
      }
    }
  },
  num: -640,
  gen: 6
})
