import { exoPlanets } from '../exo/';
import { wormholes } from './wormholes';
import { emptySpaceCards } from './empty-space';
import { starterSpaceJunk } from './space-debris';
import { idGenerator } from '../index';

// TEMP DATA FOR DRAW LOGIC
// REPLACE!!

// Exploration Base deck
// - Exo Cards + Faction Home Planets
// - Event Cards
// - Encounter Cards

// CARDS

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
  cardId: 8001,
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  discoveries: discoveries,
  description: 'Bonus Ore',
  flavorText: 'we rich!',
  cardType: 'Exoplanet',
}

const comet = {
  name: 'Haley Bob',
  cardId: 8002,
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  discoveries: discoveries,
  description: 'Water!',
  flavorText: 'drink up',
  cardType: 'Exoplanet',
}

const sun = {
  name: 'Proxima B',
  cardId: 8003,
  imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
  discoveries: discoveries,
  description: 'sun',
  flavorText: 'dont look directly at it',
  cardType: 'Exoplanet',
}

// SETS
const exoCards= [
  planet,
  comet,
  sun,
];

const eventCards = [
  {
    cardId: 4001,
    name: 'Boom',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
    description: 'things are getting hot..',
    flavorText: 'blah blah blah',
    cardType: 'Event',
  },
];

const encounterCards = [
  {
    cardId: 2001,
    name: 'Politicians',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
    description: 'Corrupt AF',
    flavorText: 'blah blah blah',
    cardType: 'Encounter',
  },
  {
    cardId: 2002,
    name: 'Space Pirates',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
    description: 'Arrrrrrr',
    flavorText: 'blah blah blah',
    cardType: 'Encounter',
  },
  {
    cardId: 2003,
    name: 'War Mongers',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/07/15/13/32/planet-846181_960_720.jpg',
    description: 'We are coming for you',
    flavorText: 'blah blah blah',
    cardType: 'Encounter',
  },
];

const baseExplorationCards = [
  ...starterSpaceJunk,
  ...emptySpaceCards,
  ...wormholes,
];

// STARTING DECK
export const starterCards = idGenerator([
  ...exoCards,
  ...exoPlanets,
  ...eventCards,
  ...encounterCards,
  ...baseExplorationCards,
]);

