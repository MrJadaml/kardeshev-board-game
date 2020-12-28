// TEMP DATA FOR DRAW LOGIC
// REPLACE!!

// Exploration Base deck
// - Exoplanet Cards + Faction Home Planets
// - Event Cards
// - Encounter Cards

// CARDS
const emptySpace = {
  id: 3001,
  name: 'Empty Space',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  description: 'Nothing but darkness',
  flavorText: 'blah blah blah',
  cardType: 'Null',
}

const discoveries = [
  '@',
  '#',
  '%',
  '&',
  '©',
  '§',
  '¶',
];

const planet = {
  name: 'Planet X',
  id: 8001,
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  discoveries: discoveries,
  description: 'Bonus Ore',
  flavorText: 'we rich!',
  cardType: 'Exoplanet',
}

const comet = {
  name: 'Haley Bob',
  id: 8002,
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  discoveries: discoveries,
  description: 'Water!',
  flavorText: 'drink up',
  cardType: 'Exoplanet',
}

const sun = {
  name: 'Proxima B',
  id: 8003,
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  discoveries: discoveries,
  description: 'sun',
  flavorText: 'dont look directly at it',
  cardType: 'Exoplanet',
}

// SETS
const exoplanetCards = [
  planet,
  comet,
  sun,
];

const eventCards = [
  {
    id: 4001,
    name: 'Boom',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
    description: 'things are getting hot..',
    flavorText: 'blah blah blah',
    cardType: 'Event',
  },
];

const encounterCards = [
  {
    id: 2001,
    name: 'Politicians',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
    description: 'Corrupt AF',
    flavorText: 'blah blah blah',
    cardType: 'Encounter',
  },
  {
    id: 2002,
    name: 'Space Pirates',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
    description: 'Arrrrrrr',
    flavorText: 'blah blah blah',
    cardType: 'Encounter',
  },
  {
    id: 2003,
    name: 'War Mongers',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
    description: 'We are coming for you',
    flavorText: 'blah blah blah',
    cardType: 'Encounter',
  },
];

const baseExplorationCards = [
  emptySpace,
  emptySpace,
  emptySpace,
  emptySpace,
  emptySpace,
];

// STARTING DECK
export const starterCards = [
  ...exoplanetCards,
  ...eventCards,
  ...encounterCards,
  ...baseExplorationCards,
];

