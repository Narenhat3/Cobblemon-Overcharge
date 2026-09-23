({
  name: 'Shocking Orb',
  spritenum: -700,
  fling: {
    basePower: 30,
    status: 'par'
  },
  onResidualOrder: 28,
  onResidualSubOrder: 3,
  onResidual(pokemon) {
    pokemon.trySetStatus('par', pokemon);
  },
  num: -1000,
  gen: 9
})