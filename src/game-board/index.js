import { useState } from 'react';

import Tracker from '../tracker/';
import Market from '../market/';
import Deck from '../deck/';
import DiscardPile from '../discard-pile/';

import styles from './GameBoard.module.css';
import cardBack from '../assets/card-back-1.png';

const GameBoard = ({ handleDraw, explorationDeck, explorationDiscardPile }) => {
  return (
    <div className={styles.board}>
      <h1>Game Board</h1>

      <Tracker name="Session" />

      <div className={styles.mid}>
        <div className={styles.research}>
          Research Pact
        </div>

        <Market />
      </div>

      <div className={styles.bottom}>
        <div className={styles.reference}>
          Icon Reference
        </div>
        <div className={styles.oreMarket}>
          Ore Market??
        </div>
      </div>


      <h2>Exploration Cards</h2>
      <div className={styles.cardStacks}>
        <Deck
          name="Exploration"
          handleDraw={handleDraw}
          cards={explorationDeck}
          cardBack={cardBack}
        />

        <DiscardPile
          name="Exploration"
          cards={explorationDiscardPile}
          cardBack={cardBack}
        />
      </div>
    </div>
  );
}

export default GameBoard;
