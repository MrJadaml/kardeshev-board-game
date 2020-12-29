import './App.css';
import { useState } from 'react';

import GameBoard  from './game-board/'
import PlayerArea  from './player-area/'
import Box  from './box/'
import { draw, shuffle } from './utils/cards';
import { starterCards } from './content/cards/exploration/';

const App = () => {
  const [explorationDeck, setExplorationDeck] = useState(shuffle(starterCards));
  const [explorationDraw, setExplorationDraw] = useState([]);
  const [explorationDiscardPile, setExplorationDiscardPile] = useState([]);

  const handleExplorationDraw = () => {
    setExplorationDraw([...draw(explorationDeck), ...explorationDraw]);
  }

  const handleExplorationDiscard = () => {
  }

  const handleDraw = () => {
  }

  return (
    <div className="App">
      <GameBoard
        handleDraw={handleExplorationDraw}
        explorationDeck={explorationDeck}
        explorationDiscardPile={explorationDiscardPile}
      />

      <PlayerArea
        explorationDraw={explorationDraw}
      />

      <Box />
    </div>
  );
}


export default App;
