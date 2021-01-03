import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { shuffle } from '../components/utils/cards';
import { starterCards } from '../content/cards/exploration/';

export const explorationDeckState = atom({
  key: 'explorationdeckstate',
  default: shuffle(starterCards),
});

export const explorationDiscardPileState = atom({
  key: 'explorationdiscardpilestate',
  default: [],
});

export const playerExplorationDrawState = atom({
  key: 'playerexplorationhandstate',
  default: [],
});

export const playerDiscardPileState = atom({
  key: 'playerDiscardPileState',
  default: [],
});

export const techDrawState = atom({
  key: 'playerDiscardPileState',
  default: [null, null, null, null, null, null, null, null],
});
