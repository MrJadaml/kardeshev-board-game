
export const shuffle = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck
}

export const draw = (deck, count = 5) => {
  return deck.splice(0, count);
}

export const discard = (hand, discardPile) => {
  return [...hand, ...discardPile]
}

function main() {
  const deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  let discardPile = [];

  const shuffledDeck = shuffle(deck);

  let hand = draw(shuffledDeck)
  console.log(hand);
  console.log(discardPile)
  discardPile = discard(hand, discardPile);
  console.log(discardPile)
  hand = draw(shuffledDeck)
  console.log(hand);
  console.log(discardPile)
  discardPile = discard(hand, discardPile);
  console.log(discardPile)
}
