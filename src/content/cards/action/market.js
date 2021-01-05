import { cardCloner, idGenerator } from '../index';

const worker = {
  cardId: 1101,
  name: 'Overtime',
  cost: '5 Sci',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: 'Take Two Work Actions',
  flavorText: 'blah blah blah',
  cardType: 'worker',
}

const science = {
  cardId: 1102,
  name: 'Double Science',
  cost: '3 Sci',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: '+2 Science',
  flavorText: 'blah blah blah',
  cardType: 'science',
}

const ore = {
  cardId: 1103,
  name: 'Double Ore',
  cost: '3 Sci',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: '+2 Ore',
  flavorText: 'blah blah blah',
  cardType: 'ore',
}

const credit = {
  cardId: 1104,
  name: 'Double Credit',
  cost: '2 Sci',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: '+2 Credit',
  flavorText: 'blah blah blah',
  cardType: 'credit',
}

export const marketCards = idGenerator([
  worker,
  ...cardCloner(science, 4),
  ...cardCloner(ore, 3),
  ...cardCloner(credit, 3),
]);
