({
  name: 'Dragon Crayon',
  gen: 9,
  onStart(pokemon) {
    const ADD_TYPE = this.effect.name.split(' ')[0];
    const types = pokemon.getTypes();
    if (types.length !== 1 || types.includes(ADD_TYPE)) return;
    (pokemon.itemData ??= {}).crayonOriginalTypes = types;
    pokemon.itemData.crayonActivated = false;
    pokemon.addType(ADD_TYPE);
    if (!pokemon.illusion) {
      this.add('-start', pokemon, 'typeadd', ADD_TYPE, `[from] item: ${this.effect.name}`);
      pokemon.itemData.crayonActivated = true;
    }
  },
  onUpdate(pokemon) {
    if (pokemon.itemData?.crayonOriginalTypes && !pokemon.itemData.crayonActivated && !pokemon.illusion) {
      const ADD_TYPE = this.effect.name.split(' ')[0];
      this.add('-start', pokemon, 'typeadd', ADD_TYPE, `[from] item: ${this.effect.name}`);
      pokemon.itemData.crayonActivated = true;
    }
  },
  onEnd(pokemon) {
    if (!pokemon.itemData?.crayonOriginalTypes) return;
    if (!pokemon.illusion) this.add('-enditem', pokemon, this.effect.name);
    pokemon.setType(pokemon.itemData.crayonOriginalTypes);
    delete pokemon.itemData.crayonOriginalTypes;
    delete pokemon.itemData.crayonActivated;
  }
})