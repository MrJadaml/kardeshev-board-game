const discoveries = ['@', '#', '%', '&', '©', '§', '¶'];

const planet = {
  id: 8000,
  name: 'Terra',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  discoveries: discoveries,
  description: 'You find the remnants of a long since abandon mining colony',
  benifits: {
    ability: 'store up to 10 ore in the old storage bays',
  },
  exhaustionPenalty: {
    vp: -10,
    reputation: -1,
  },
  developments: [ 'ore storage' ],
  unlockables: null,
  event: null,
  resources: { ore: 20 },
  vp: 1,
  flavorText: 'it\'s round',
  cardType: 'Exo',
}

