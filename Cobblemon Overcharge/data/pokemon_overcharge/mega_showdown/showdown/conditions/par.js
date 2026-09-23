({
  name: "par",
  effectType: "Status",
  onStart(target, source, sourceEffect) {
    if (sourceEffect && sourceEffect.effectType === "Ability") {
      this.add("-status", target, "par", "[from] ability: " + sourceEffect.name, "[of] " + source);
    } else {
      this.add("-status", target, "par");
    }
  },
  onModifySpe(spe, pokemon) {
    const queueAction = this.queue.willMove(pokemon);
    const isUsingElectroEars = queueAction?.choice === 'move' && queueAction.move?.id === 'electroears';
    if (isUsingElectroEars) return spe;
    spe = this.finalModify(spe);
    if (!pokemon.hasAbility("quickfeet")) {
    spe = Math.floor(spe * 50 / 100);
    }
    return spe;
  },
  onBeforeMovePriority: 1,
  onBeforeMove(pokemon, target, move) {
    if (move?.id === 'electroears') return;
    if (this.randomChance(1, 4)) {
      this.add("cant", pokemon, "par");
      return false;
    }
  }
})