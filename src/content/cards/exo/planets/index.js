const discoveries = ['@', '#', '%', '&', '©', '§', '¶'];

export const planet = {
  abilities: {
    primary: 'store up to [+4 cards] ore in the old storage bays',
    secondary: 'Delivery: Take up to half of ore cache',
    kickback: 'Gain 1 cached card per card taken by other player',
  },
  benifits: [
    {
      type: 'ore',
      value: 1,
      cadence: 'claim/number',
    },
  ],
  cardId: 8000,
  cardType: 'Exo',
  description: 'You find the remnants of a long abandon mining colony',
  developments: [ 'ore storage' ],
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
  tags: [],
  unlockables: null,
  vp: 1,
}

