import { useRecoilState } from 'recoil';
import { useState } from 'react';

import Tracker from '../tracker/';
import Market from '../market/';
import Deck from '../deck/';
import DiscardPile from '../discard-pile/';
import { WorkerLocation } from '../worker-location/';

import {
  explorationDeckState,
  playerExplorationDrawState,
  explorationDiscardPileState,
} from '../../state/atoms.js';

import { draw } from '../../utils/deck';
import cardBack from '../../assets/card-back-1.png';
import styles from './GameBoard.module.css';

const GameBoard = ({ handleDraw }) => {
  const [explorationDeck, setExplorationDeck] = useRecoilState(explorationDeckState);
  const [playerExplorationDraw, setPlayerExplorationDraw] = useRecoilState(playerExplorationDrawState);
  const [explorationDiscardPile, setExplorationDiscardPile] = useRecoilState(explorationDiscardPileState);

  const handleExplorationDraw = () => {
    setPlayerExplorationDraw([...playerExplorationDraw, ...draw(explorationDeck)]);
  }

  const handleExplorationDiscard = () => {
    setExplorationDiscardPile([...playerExplorationDraw, ...explorationDiscardPile]);
    setPlayerExplorationDraw([]);
  }

  return (
    <div className={styles.board}>
      <h1>Game Board</h1>

      <Tracker name="Session" />

      <div className={styles.middle}>
        <div className={styles.research}>
          Research Pact
          <WorkerLocation />
        </div>

        <Market />

        <div className={styles.end}>
          <div className={styles.reference}>
            Icon Reference
          </div>
          <div className={styles.oreMarket}>
            Ore Market??
          </div>

          <div className={styles.explorationDeck}>
            <h2>Exploration Cards</h2>
            <div className={styles.cardStacks}>
              <Deck
                name="Exploration"
                handleDraw={handleExplorationDraw}
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
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
