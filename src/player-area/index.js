import { useState } from 'react';
import styles from './PlayerArea.module.css';

import { starterCards } from '../content/cards/faction/starters';
import Deck from '../deck/';
import DiscardPile from '../discard-pile/';
import CardRiver from '../card-river/';

import { draw, shuffle } from '../utils/cards';

const PlayerArea = ({
  explorationDraw,
  setExplorationDraw,
  explorationDiscardPile,
  setExplorationDiscardPile,
  setExplorationDeck,
}) => {
  const [playerDeck, setPlayerDeck] = useState(shuffle(starterCards));
  const [playerHand, setPlayerHand] = useState([]);
  const [playerDiscardPile, setPlayerDiscardPile] = useState([]);

  const handlePlayerDraw = () => {
    setPlayerHand([...draw(playerDeck), ...playerHand]);
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

  const handleEndTurn = () => {
    setExplorationDiscardPile([...explorationDraw, ...explorationDiscardPile]);
    setExplorationDraw([]);

    setPlayerDiscardPile([...playerHand, ...playerDiscardPile]);
    setPlayerHand([]);

    if (playerDeck.length === 0) {
      setPlayerDeck(shuffle(playerDiscardPile));
      setPlayerDiscardPile([]);
    }
  }

  return (
    <div className="player-area">
      <h1>Player Area</h1>
      <button onClick={handleEndTurn}>End Turn</button>

      <div>Active Cards - Exos, EAs, PCs, etc..</div>
      <br />

      ------------------------

      <CardRiver
        name="Exploration"
        cards={explorationDraw}
      />

      ------------------------

      <CardRiver
        name="Player"
        cards={playerHand}
        handleDiscard={handlePlayerDiscard}
      />

      <div className={styles.cardStacks}>
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
    </div>
  );
}


export default PlayerArea;
