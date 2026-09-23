({
    name: "Polarized Glass",
    spritenum: 6,
    fling: {
        basePower: 10,
    },
    onStart(pokemon) {
        if (!pokemon.ignoringItem()) {
            this.add('-item', pokemon, 'Polarized Glass');
        }
    },
    onModifyMove(move) {
        move.ignoreAbility = true;
    },
    onDamagingHit(damage, target, source, move) {
        if (target.hasItem('polarizedglass')) {
            this.add('-enditem', target, 'Polarized Glass');
            target.item = '';
            target.itemState = {id: '', target};
            this.runEvent('AfterUseItem', target, null, null, this.dex.items.get('polarizedglass'));
        }
    },
    onAfterSubDamage(damage, target, source, effect) {
        if (effect.effectType === 'Move') {
            if (target.hasItem('polarizedglass')) {
                this.add('-enditem', target, 'Polarized Glass');
                target.item = '';
                target.itemState = {id: '', target};
                this.runEvent('AfterUseItem', target, null, null, this.dex.items.get('polarizedglass'));
            }
        }
    },
    gen: 9
})