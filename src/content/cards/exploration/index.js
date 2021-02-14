import { cardCloner, idGenerator } from '../index';
import { emptySpace } from './empty-space';
import { eventCard } from '../event/';
import { encounterCard } from '../encounter/';
import { planet } from '../exo/planets';
import { spaceDebris } from './space-debris';
import { wormholes } from './wormholes';

export const starterCards = idGenerator([
  ...cardCloner(emptySpace, 60),
  ...cardCloner(eventCard, 8),
  ...cardCloner(planet, 12),
  ...cardCloner(spaceDebris, 10),
  ...cardCloner(encounterCard, 6),
  ...wormholes, // 4%
]);

