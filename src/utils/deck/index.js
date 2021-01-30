import { times } from 'lodash';

export const shuffle = (deck) => {
  const nextDeck = [...deck];

  for (let i = nextDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nextDeck[i], nextDeck[j]] = [nextDeck[j], nextDeck[i]];
  }

  return nextDeck
}

export const draw = (deck, count = 1) => {
  return deck.splice(0, count);
}

export const moveCardFrom = (start, end, cardID) => {
  let selectedCard;

  const nextStart = start.filter(card => {
    if (card.id === cardID) {
      selectedCard = card;
      return false;
    }

    return true;
  });

  const nextEnd = [...end, selectedCard];

  return [nextStart, nextEnd];
}

export const getCardResourceList = (card) => {
  try {
    const cardResourceList = card.resources.reduce((acc, resource, idx) => {
      const resourceCount = resource[Object.keys(resource)[0]];
      const resourceList = times(resourceCount, () => Object.keys(resource)[0]);
      return [...acc, ...resourceList];
    }, [])

    console.log('----', cardResourceList)
    return cardResourceList;
  } catch (e) {
    console.log('#getCardResourceList', e);
  }
}

