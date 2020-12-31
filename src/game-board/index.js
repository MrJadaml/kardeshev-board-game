import { useState } from 'react';

import Tracker from '../tracker/';
import Market from '../market/';
import Deck from '../deck/';
import DiscardPile from '../discard-pile/';

import styles from './GameBoard.module.css';

const GameBoard = ({ handleDraw, explorationDeck, explorationDiscardPile }) => {
  return (
    <div className={styles.board}>
      <h1>Game Board</h1>

      <Tracker name="Session" />
      <Market />

      <h2>Exploration Cards</h2>
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
