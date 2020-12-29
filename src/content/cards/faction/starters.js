import { cardCloner, idGenerator } from '../index';

const worker = {
  cardId: 1001,
  name: 'Worker',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: 'Take a Work Action',
  flavorText: 'blah blah blah',
  cardType: 'worker',
}

const science = {
  cardId: 1002,
  name: 'Science',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: '+1 Science',
  flavorText: 'blah blah blah',
  cardType: 'science',
}

const ore = {
  cardId: 1003,
  name: 'Ore',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: '+1 Ore',
  flavorText: 'blah blah blah',
  cardType: 'ore',
}

const credit = {
  cardId: 1004,
  name: 'Credit',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: '+1 Credit',
  flavorText: 'blah blah blah',
  cardType: 'credit',
}

const faction1 = {
  cardId: 1005,
  name: 'Faction Ability',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: '+1 Draw & +1 Science',
  flavorText: 'blah blah blah',
  cardType: 'faction',
}

const faction2 = {
  cardId: 1005,
  name: 'Faction Ability',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: '+2 Science',
  flavorText: 'blah blah blah',
  cardType: 'faction',
}

const faction3 = {
  cardId: 1005,
  name: 'Faction Ability',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: '+1 Action & +1 Science',
  flavorText: 'blah blah blah',
  cardType: 'faction',
}

const burner = {
  cardId: 1005,
  name: 'Burner',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: '+1 Draw & +2 Science. Once the science resources from this card are used, trash this card',
  flavorText: 'one and done',
  cardType: 'faction',
}

export const starterCards = idGenerator([
  worker,
  ...cardCloner(science, 4),
  ...cardCloner(ore, 3),
  ...cardCloner(credit, 3),
  faction1,
  faction2,
  faction3,
  burner,
]);
