import './App.css';
import { useState } from 'react';

import { ExoCard } from './cards/ExoCard'
import GameBoard  from './game-board/'
import PlayerArea  from './player-area/'
import Box  from './box/'
import { cards } from './data/cards';
import { draw } from './utils/cards';

const App = () => {
  const [deck, setDeck] = useState(cards);
  const [discardPile, setDiscardPile] = useState([]);
  const [hand, setHand] = useState([]);

  const handleDraw = () => {
    setHand(draw(cards));
  }

  const handleDiscard = () => {
    setHand([]);
    setDiscardPile([...hand, ...discardPile]);
  }

  return (
    <div className="App">
      <GameBoard
        handleDraw={handleDraw}
      />

      <PlayerArea
        handleDraw={handleDraw}
      />

      <Box />




      --------------------------------
      --------------------------------
      <br />
      <br />
      --------------------------------

      <br />
      <br />

      <button onClick={handleDraw}>Draw</button>

      {hand.map(card =>
        <ExoCard data={card} />
      )}

      <button onClick={handleDiscard}>Discard</button>

      <p>-----------------------------</p>

      {discardPile.map(card =>
        <ExoCard data={card} />
      )}
    </div>
  );
}


export default App;
