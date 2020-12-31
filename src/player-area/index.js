import { useState } from 'react';
import styles from './PlayerArea.module.css';

import { starterCards } from '../content/cards/faction/starters';
import Deck from '../deck/';
import DiscardPile from '../discard-pile/';
import CardRiver from '../card-river/';
import FactionBoard from '../faction-board/';
import HexMap from '../hex-map/';

import { draw, shuffle } from '../utils/cards';

const PlayerArea = ({
  explorationDraw,
  handleExplorationDiscard,
  setExplorationDiscardPile,
  setExplorationDeck,
}) => {
  const [playerDeck, setPlayerDeck] = useState(shuffle(starterCards));
  const [playerHand, setPlayerHand] = useState([]);
  const [playerDiscardPile, setPlayerDiscardPile] = useState([]);

  const handlePlayerDraw = () => {
    setPlayerHand([...playerHand, ...draw(playerDeck)]);
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
    handleExplorationDiscard()

    setPlayerDiscardPile([...playerHand, ...playerDiscardPile]);
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

      <CardRiver
        name="Player"
        cards={playerHand}
        handleDiscard={handlePlayerDiscard}
      />

      <FactionBoard />
    </div>
  );
}


export default PlayerArea;
