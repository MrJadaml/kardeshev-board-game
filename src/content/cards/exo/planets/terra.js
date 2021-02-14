const discoveries = ['@', '#', '%', '&', '©', '§', '¶'];

export const abandonMine = {
  abilities: {
    primary: 'Produce 1 Ore, Cache 1 Ore: Take cached Ore',
    secondary: 'Cache 1 Ore: Take half of cached Ore',
    kickback: 'Gain 1 cached card per card taken by other player',
  },
  benifits: [
    {
      type: 'cache/ore',
      value: 4,
    },
  ],
  cardId: 8000,
  cardType: 'Exo',
  civ: {},
  description: 'You find the remnants of a long abandon mining colony',
  developments: [ 'mine', 'ore storage' ],
  discoveries: discoveries,
  event: null,
  exhaustion: {
    vp: -10,
    reputation: -1,
    ore: 10,
  },
  flavorText: 'it\'s round',
  imageUrl: '',
  name: 'Terra',
  tags: [ 'industry' ],
  unlockables: null,
  vp: 1,
}

export const spaceDock = {
  abilities: {
    primary: 'Dock a second action card',
    secondary: 'Copy effects of a docked card and pay cost',
    kickback: 'Gain half the cost of card, rounded up, as payment from user',
  },
  benifits: [
    {
      type: 'card/action',
      value: 1,
      boost: ''
    },
  ],
  cardId: 8001,
  cardType: 'Exo',
  civ: {},
  description: '',
  developments: [],
  discoveries: discoveries,
  event: null,
  exhaustion: null,
  flavorText: 'it\'s round',
  imageUrl: '',
  name: 'Space Dock',
  tags: [ 'trade' ],
  unlockables: null,
  vp: 1,
}

export const creditExo = {
  abilities: {},
  benifits: [
    { type: 'credit', value: 1 }
  ],
  cardId: 8001,
  cardType: 'Exo',
  civ: {},
  description: '',
  developments: [ 'blank' ],
  discoveries: discoveries,
  event: null,
  exhaustion: null,
  flavorText: 'it\'s round',
  imageUrl: '',
  name: '',
  tags: [],
  unlockables: null,
  vp: 1,
}

export const oreExo = {
  abilities: {},
  benifits: [
    { type: 'ore', value: 1 }
  ],
  cardId: 8001,
  cardType: 'Exo',
  civ: {},
  description: '',
  developments: [ 'blank' ],
  discoveries: discoveries,
  event: null,
  exhaustion: null,
  flavorText: 'it\'s round',
  imageUrl: '',
  name: '',
  tags: [],
  unlockables: null,
  vp: 1,
}

export const scienceExo = {
  abilities: {},
  benifits: [
    { type: 'science', value: 1 }
  ],
  cardId: 8001,
  cardType: 'Exo',
  civ: {},
  description: '',
  developments: [ 'blank' ],
  discoveries: discoveries,
  event: null,
  exhaustion: null,
  flavorText: 'it\'s round',
  imageUrl: '',
  name: '',
  tags: [],
  unlockables: null,
  vp: 1,
}

export const primitiveCiv = {
  abilities: {},
  benifits: [
    {
      type: 'worker',
      value: 1,
      cadence: 'claim'
    }
  ],
  cardId: 8001,
  cardType: 'Exo',
  civ: {},
  description: '',
  developments: [ 'blank' ],
  discoveries: discoveries,
  event: null,
  exhaustion: null,
  flavorText: 'it\'s round',
  imageUrl: '',
  name: '',
  tags: [ 'civ', 'wild' ],
  unlockables: null,
  vp: 2,
}

export const sciCiv = {
  abilities: {
    primary: 'Spend X Credits: Move a worker up one level in Research Accord',
    secondary: 'Spend Credits equal to number of workers in RA: Move a worker up one level in Research Accord',
    kickback: 'Spend Credits equal to number of workers in RA: Move a worker up one level in Research Accord',
  },
  benifits: [],
  cardId: 8001,
  cardType: 'Exo',
  civ: {},
  description: '',
  developments: [ 'lab' ],
  discoveries: discoveries,
  event: null,
  exhaustion: null,
  flavorText: 'it\'s round',
  imageUrl: '',
  name: '',
  tags: [ 'genetics' ],
  unlockables: null,
  vp: 2,
}
export const terra = [
  spaceDock,
];
