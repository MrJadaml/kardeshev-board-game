import { useState } from 'react';
import styles from './GameBoard.module.css';

import Tracker from '../tracker/';
import Deck from '../deck/';
import DiscardPile from '../discard-pile/';

const GameBoard = ({ handleDraw, explorationDeck, explorationDiscardPile }) => {
  return (
    <div className="game-board">
      <h1>Game Board</h1>

      <Tracker name="Session" />

      <div className={styles.cardStacks}>
        <Deck
          name="Exploration"
          handleDraw={handleDraw}
          cards={explorationDeck}
        />

        <DiscardPile
          name="Exploration"
          cards={explorationDiscardPile}
        />
      </div>
    </div>
  );
}


export default GameBoard;
