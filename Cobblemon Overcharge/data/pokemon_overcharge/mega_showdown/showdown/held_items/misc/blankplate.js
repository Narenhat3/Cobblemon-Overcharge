({
	name: "Blank Plate",
	spritenum: 105,
	onPlate: 'Normal',
	onBasePowerPriority: 15,
	onBasePower(basePower, user, target, move) {
		if (move && move.type === 'Normal') {
		return this.chainModify([4915, 4096]);
		}
	},
	onTakeItem(item, pokemon, source) {
		if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
			return false;
		}
		return true;
	},
	num: -10000,
	gen: 4
})