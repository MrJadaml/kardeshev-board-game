import { useState } from 'react';

import { cards } from '../content/cards';
import { starterCards } from '../content/faction/starters';
import Deck from '../deck/';
import DiscardPile from '../discard-pile/';
import CardRiver from '../card-river/';

import { draw } from '../utils/cards';

const PlayerArea = ({ handleDraw, shuffle }) => {
  const [playerDeck, setPlayerDeck] = useState(starterCards);
  const [playerHand, setPlayerHand] = useState([]);
  const [playerDiscardPile, setPlayerDiscardPile] = useState([]);

  const handlePlayerDraw = () => {
    setPlayerHand(draw(playerDeck));
  }

  const handlePlayerDiscard = (cardID) => {
    let discard;

    const filteredHand = playerHand.filter(card => {
      if (card.id === cardID) {
        discard = card;
        return false;
      }

      return true;
    });

    setPlayerHand(filteredHand);
    setPlayerDiscardPile([discard, ...playerDiscardPile]);
  }

  return (
    <div className="player-area">
      <h1>Player Area</h1>

      <CardRiver
        name="Exploration"
        cards={[]}
      />
      ------------------------

      <div>Active Cards - Exos, EAs, PCs, etc..</div>
      <br />
      ------------------------

      <div>
        <Deck
          name="Player"
          handleDraw={handlePlayerDraw}
          cards={playerDeck}
        />

        <DiscardPile
          name="Player"
          cards={playerDiscardPile}
        />
      </div>

      <CardRiver
        name="Player"
        cards={playerHand}
        handleDiscard={handlePlayerDiscard}
      />
    </div>
  );
}


export default PlayerArea;
