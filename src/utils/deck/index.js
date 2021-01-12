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
