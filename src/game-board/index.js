import { useState } from 'react';

import { cards } from '../data/cards';
import { draw } from '../utils/cards';
import Tracker from '../tracker/';
import Deck from '../deck/';
import DiscardPile from '../discard-pile/';

const GameBoard = ({ handleDraw, shuffle }) => {
  return (
    <div className="game-board">
      <h1>Game Board</h1>

      <Tracker name="Session" />

      <div>
        <Deck
          name="Exploration"
          handleDraw={handleDraw}
        />

        <DiscardPile
          name="Exploration"
        />
      </div>
    </div>
  );
}


export default GameBoard;
