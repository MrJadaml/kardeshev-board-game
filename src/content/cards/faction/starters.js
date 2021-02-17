import { cardCloner, idGenerator } from '../index';
import { ore, credit, science } from '../resource/';

const worker = {
  cardId: 1001,
  name: 'Survey',
  imageUrl: '',
  description: 'Move a worker to an unsurveyed hex and reveal that hex.',
  flavorText: '',
  cardType: 'worker',
  resources: [
    { credits: 1 },
  ],
}

const faction1 = {
  cardId: 10092,
  name: 'Faction Ability',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: '+1 Draw',
  flavorText: 'blah blah',
  cardType: 'faction',
  resources: [
    { credits: 1 },
  ],
}

const faction2 = {
  cardId: 1003,
  name: 'Faction Ability',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: '+1 Scan',
  flavorText: 'blah blah blah',
  cardType: 'faction',
  resources: [
    { science: 2 },
  ],
}

const faction3 = {
  cardId: 1004,
  name: 'Faction Ability',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: '+1 Action',
  flavorText: 'blah blah blah',
  cardType: 'faction',
  resources: [
    { science: 1 },
  ],
}

const burnerScience = {
  cardId: 1005,
  name: 'Burner',
  imageUrl: '',
  description: '+2 Draw. Once resources are used, trash this card',
  flavorText: 'one and done',
  cardType: 'faction',
  resources: [
    { science: 3 },
  ],
  oneTimeResource: true,
}

const burnerOre = {
  cardId: 1006,
  name: 'Burner',
  imageUrl: '',
  description: '+1 Draw. +1 Scan. Once resources are used, trash this card',
  flavorText: 'one and done',
  cardType: 'faction',
  resources: [
    { ore: 2 },
  ],
  oneTimeResource: true,
}

export const starterCards = idGenerator([
  worker,
  ...cardCloner(science, 4),
  ...cardCloner(ore, 5),
  ...cardCloner(credit, 0),
  faction1,
  faction2,
  faction3,
  burnerOre,
  burnerScience,
]);
