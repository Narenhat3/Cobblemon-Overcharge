({
  name: 'Override',
  onStart(pokemon) {
    const bannedItems = ['choicescarf', 'choiceband', 'choicespecs'];
    const item = pokemon.getItem();
    if (bannedItems.includes(item.id)) {
      this.add('-activate', pokemon, 'ability: Override', item.name);
    }
  },
  onResidual(pokemon) {
    const bannedItems = ['choicescarf', 'choiceband', 'choicespecs'];
    const item = pokemon.getItem();
    if (bannedItems.includes(item.id) && pokemon.volatiles['choicelock']) {
      pokemon.removeVolatile('choicelock');
    }
  },
  onModifyMove(move, pokemon) {
    const bannedItems = ['choicescarf', 'choiceband', 'choicespecs'];
    const item = pokemon.getItem();
    if (bannedItems.includes(item.id)) {
      move.isChoice = false;
    }
  }
})