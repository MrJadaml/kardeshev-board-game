import { cloneDeep } from 'lodash';

export const cardCloner = (card, copies) => {
  const clones = [];

  for (let i = 0; i < copies; i++) {
    clones.push(cloneDeep(card));
  }

  return clones;
}

export const idGenerator = cards => {
  const cardsWithIds = cards.map((card, idx) => {
    const nextCard = cloneDeep(card);
    nextCard.id = nextCard.cardId + idx;

    return nextCard;
  });

  return cardsWithIds;
}
