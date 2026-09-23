({
  name: 'Fairy Eraser',
  gen: 9,
  onStart(pokemon) {
    const ERASE_TYPE = this.effect.name.split(' ')[0];
    const types = pokemon.getTypes();
    if (types.length !== 2 || !types.includes(ERASE_TYPE)) return;
    (pokemon.itemData ??= {}).eraserOriginalTypes = types.slice();
    pokemon.itemData.eraserActivated = false;
    pokemon.setType(types.filter(t => t !== ERASE_TYPE));
    if (!pokemon.illusion) {
      this.add('-start', pokemon, 'typeremove', ERASE_TYPE, `[from] item: ${this.effect.name}`);
      pokemon.itemData.eraserActivated = true;
    }
  },
  onUpdate(pokemon) {
    if (pokemon.itemData?.eraserOriginalTypes && !pokemon.itemData.eraserActivated && !pokemon.illusion) {
      const ERASE_TYPE = this.effect.name.split(' ')[0];
      this.add('-start', pokemon, 'typeremove', ERASE_TYPE, `[from] item: ${this.effect.name}`);
      pokemon.itemData.eraserActivated = true;
    }
  },
  onEnd(pokemon) {
    if (!pokemon.itemData?.eraserOriginalTypes) return;
    if (!pokemon.illusion) this.add('-enditem', pokemon, this.effect.name);
    pokemon.setType(pokemon.itemData.eraserOriginalTypes);
    delete pokemon.itemData.eraserOriginalTypes;
    delete pokemon.itemData.eraserActivated;
  }
})