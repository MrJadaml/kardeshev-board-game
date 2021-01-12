import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { shuffle } from '../utils/deck';
import { starterCards } from '../content/cards/exploration/';

export const explorationDeckState = atom({
  key: 'explorationDeckState',
  default: shuffle(starterCards),
});

export const explorationDiscardPileState = atom({
  key: 'explorationDiscardPileState',
  default: [],
});

export const playerExplorationDrawState = atom({
  key: 'playerExplorationHandState',
  default: [],
});

export const playerDiscardPileState = atom({
  key: 'playerDiscardPileState',
  default: [],
});

export const techDrawState = atom({
  key: 'techDrawState',
  default: [null, null, null, null, null, null, null, null],
});
