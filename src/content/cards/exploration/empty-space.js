import { cardCloner } from '../index';

const emptySpace = {
  cardId: 3000,
  name: 'Empty Space',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: 'Nothing but darkness',
  flavorText: 'blah blah blah',
  cardType: 'Null',
}

export const emptySpaceCards = [
  ...cardCloner(emptySpace, 10),
];
