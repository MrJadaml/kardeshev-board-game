import './App.css';
import { useState } from 'react';

import GameBoard  from './game-board/'
import PlayerArea  from './player-area/'
import { draw, shuffle } from './utils/cards';
import { starterCards } from './content/cards/exploration/';

const App = () => {
  const [explorationDeck, setExplorationDeck] = useState(shuffle(starterCards));
  const [explorationDraw, setExplorationDraw] = useState([]);
  const [explorationDiscardPile, setExplorationDiscardPile] = useState([]);

  const handleExplorationDraw = () => {
    setExplorationDraw([...explorationDraw, ...draw(explorationDeck)]);
  }

  const handleExplorationDiscard = () => {
    setExplorationDiscardPile([...explorationDraw, ...explorationDiscardPile]);
    setExplorationDraw([]);
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
        handleExplorationDiscard={handleExplorationDiscard}
        setExplorationDiscardPile={setExplorationDiscardPile}
        setExplorationDeck={setExplorationDeck}
      />
    </div>
  );
}


export default App;
