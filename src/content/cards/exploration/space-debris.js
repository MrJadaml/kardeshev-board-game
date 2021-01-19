import { cardCloner } from '../index';

const spaceDebris = {
  cardId: 3000,
  name: 'Space Debris',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: 'A bunch of space junk',
  flavorText: 'blah blah blah',
  cardType: 'Null',
}

export const starterSpaceJunk = [
  ...cardCloner(spaceDebris, 10),
]
