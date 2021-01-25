import { cardCloner, idGenerator } from '../index';

const worker = {
  cardId: 1101,
  name: 'Overtime',
  cost: 3,
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: 'Take Two Work Actions',
  flavorText: '',
  cardType: 'worker',
  resources: [
    { credits: 1 },
  ],
}

const science = {
  cardId: 1102,
  name: 'Double Science',
  cost: 5,
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: '+2 Science',
  flavorText: '',
  cardType: 'science',
  resources: [
    { credits: 1 },
  ],
}

const ore = {
  cardId: 1103,
  name: 'Double Ore',
  cost: 3,
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: '+2 Ore',
  flavorText: '',
  cardType: 'ore',
  resources: [
    { credits: 1 },
  ],
}

const credit = {
  cardId: 1104,
  name: 'Double Credit',
  cost: 3,
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: '',
  flavorText: '',
  cardType: 'credit',
  resources: [
    { credits: 2 },
  ],
}

const generic1 = {
  cardId: 1105,
  name: '',
  cost: 2,
  imageUrl: '',
  description: '+1 Draw: Exploration',
  flavorText: '',
  cardType: '',
  resources: [
    { science: 1 },
  ],
}

const generic2 = {
  cardId: 1106,
  name: '',
  cost: 2,
  imageUrl: '',
  description: '+1 Draw: Exploration',
  flavorText: '',
  cardType: '',
  resources: [
    { credits: 1 },
  ],
}

const generic3 = {
  cardId: 1107,
  name: '',
  cost: 2,
  imageUrl: '',
  description: '+1 Draw: Exploration',
  flavorText: '',
  cardType: '',
  resources: [
    { ore: 1 },
  ],
}

const generic4 = {
  cardId: 1108,
  name: '',
  cost: 2,
  imageUrl: '',
  description: '+1 Draw: Player',
  flavorText: '',
  cardType: '',
  resources: [
    { science: 1 },
  ],
}

const generic5 = {
  cardId: 1109,
  name: '',
  cost: 2,
  imageUrl: '',
  description: '+1 Draw: Player',
  flavorText: '',
  cardType: '',
  resources: [
    { credits: 1 },
  ],
}

const generic6 = {
  cardId: 1110,
  name: '',
  cost: 2,
  imageUrl: '',
  description: '+1 Draw: Player',
  flavorText: '',
  cardType: '',
  resources: [
    { ore: 1 },
  ],
}

const voyager1 = {
  cardId: 1111,
  name: '',
  cost: 4,
  imageUrl: '',
  description: '+2 Draw: Explore',
  flavorText: '',
  cardType: '',
  resources: [
    { science: 2 },
  ],
}

const voyager2 = {
  cardId: 1112,
  name: '',
  cost: 4,
  imageUrl: '',
  description: '+2 Draw: Explore',
  flavorText: '',
  cardType: '',
  resources: [
    { science: 2 },
  ],
}

const generic7 = {
  cardId: 1113,
  name: '',
  cost: 4,
  imageUrl: '',
  description: '+1 Draw: Exploration. +1 Draw: Player',
  flavorText: '',
  cardType: '',
  resources: [
    { ore: 1 },
  ],
}

const generic8 = {
  cardId: 1114,
  name: '',
  cost: 4,
  imageUrl: '',
  description: '+1 Draw: Exploration. +1 Draw: Player',
  flavorText: '',
  cardType: '',
  resources: [
    { science: 1 },
  ],
}

const generic9 = {
  cardId: 1115,
  name: '',
  cost: 4,
  imageUrl: '',
  description: '+1 Draw: Exploration. +1 Draw: Player',
  flavorText: '',
  cardType: '',
  resources: [
    { credits: 1 },
  ],
}

const generic10 = {
  cardId: 1116,
  name: '',
  cost: 5,
  imageUrl: '',
  description: '+1 Draw: Exploration. +1 Draw: Player. +1 Action',
  flavorText: '',
  cardType: '',
  resources: [
    { ore: 2 },
  ],
}

const generic11 = {
  cardId: 1117,
  name: '',
  cost: 5,
  imageUrl: '',
  description: '+1 Draw: Exploration. +1 Draw: Player. +1 Action',
  flavorText: '',
  cardType: '',
  resources: [
    { science: 2 },
  ],
}

const generic12 = {
  cardId: 1118,
  name: '',
  cost: 5,
  imageUrl: '',
  description: '+1 Draw: Exploration. +1 Draw: Player. +1 Action',
  flavorText: '',
  cardType: '',
  resources: [
    { credits: 2 },
  ],
}

const generic13 = {
  cardId: 1119,
  name: '',
  cost: 2,
  imageUrl: '',
  description: '+1/-1 Draw: Player card. Discard 1 Player card',
  flavorText: 'Known, unknowns.',
  cardType: '',
  resources: [
    { science: 1 },
  ],
}

const generic14 = {
  cardId: 1120,
  name: '',
  cost: 2,
  imageUrl: '',
  description: '-1/+1 Draw: Discard 1 Player card, then draw 1 Player card.',
  flavorText: 'Unkown, unknows.',
  cardType: '',
  resources: [
    { ore: 1 },
  ],
}

const ore1 = {
  cardId: 1119,
  name: 'Ore',
  cost: 0,
  imageUrl: '',
  description: '( 1 )',
  flavorText: '',
  cardType: '',
  resources: [
    { ore: 1 },
  ],
}

const ore2 = {
  cardId: 1120,
  name: 'Ore',
  cost: 2,
  imageUrl: '',
  description: '( 2 )',
  flavorText: '',
  cardType: '',
  resources: [
    { ore: 2 },
  ],
}

const science1 = {
  cardId: 1121,
  name: 'Science',
  cost: 0,
  imageUrl: '',
  description: '( 1 )',
  flavorText: '',
  cardType: '',
  resources: [
    { science: 1 },
  ],
}

const science2 = {
  cardId: 1122,
  name: 'Science',
  cost: 2,
  imageUrl: '',
  description: '( 2 )',
  flavorText: '',
  cardType: '',
  resources: [
    { science: 2 },
  ],
}

const credits1 = {
  cardId: 1121,
  name: 'Credits',
  cost: 0,
  imageUrl: '',
  description: '( 1 )',
  flavorText: '',
  cardType: '',
  resources: [
    { credits: 1 },
  ],
}

const credits2 = {
  cardId: 1122,
  name: 'Credits',
  cost: 2,
  imageUrl: '',
  description: '( 2 )',
  flavorText: '',
  cardType: '',
  resources: [
    { credits: 2 },
  ],
}

const salvage = {
  cardType: '',
  cost: 0,
  description: 'Remove 1 Space Debris from play. Gain +1 Ore Resource card into hand.',
  benefit: '+1 Ore',
  flavorText: '',
  imageUrl: '',
  kType: 0,
  name: 'salvage',
  resources: [
    { credits: 1 },
  ],
}

export const marketCards = idGenerator([
  worker,
  ...cardCloner(science, 2),
  ...cardCloner(ore, 3),
  ...cardCloner(credit, 2),
  ...cardCloner(salvage, 3),
  generic1,
  generic2,
  generic3,
  generic4,
  generic5,
  generic6,
  generic7,
  generic8,
  generic9,
  generic10,
  generic11,
  generic12,
  generic13,
  generic14,
  ...cardCloner(ore1, 5),
  ...cardCloner(ore2, 5),
  ...cardCloner(science1, 5),
  ...cardCloner(science2, 5),
  ...cardCloner(credits1, 3),
  ...cardCloner(credits2, 3),
  voyager1,
  voyager2,
]);
