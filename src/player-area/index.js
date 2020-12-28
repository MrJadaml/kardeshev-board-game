import { useState } from 'react';

import { cards } from '../data/cards';
import Deck from '../deck/';
import DiscardPile from '../discard-pile/';
import CardRiver from '../card-river/';

const PlayerArea = ({ handleDraw, shuffle }) => {
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
          handleDraw={handleDraw}
        />

        <DiscardPile
          name="Player"
        />
      </div>

      <CardRiver
        name="Player"
        cards={[]}
      />
    </div>
  );
}


export default PlayerArea;
