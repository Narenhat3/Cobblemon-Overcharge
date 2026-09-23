({
  num: -170,
  accuracy: 100,
  basePower: 65,
  category: 'Special',
  name: 'Degradation',
  pp: 10,
  priority: 0,
  type: 'Poison',
  target: 'normal',
  zMove: { basePower: 130 },
  maxMove: { basePower: 130 },
  contestType: 'Tough',
  flags: { protect: 1, mirror: 1, metronome: 1 },
  ignoreImmunity: { Poison: true },
  onEffectiveness(typeMod, target, type) {
    if (type === 'Steel') return 1;
  },
  secondary: {
    chance: 30,
    onHit(target, source, move) {
      if (!target || target.fainted || target.status) return;
      const force = target.hasType('Steel');
      if (force || target.runStatusImmunity('psn')) {
        target.setStatus('psn', source, move, force);
      }
    }
  }
})
