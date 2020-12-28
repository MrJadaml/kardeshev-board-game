import './App.css';
import { useState } from 'react';

import GameBoard  from './game-board/'
import PlayerArea  from './player-area/'
import Box  from './box/'
import { cards } from './data/cards';
import { draw } from './utils/cards';

const App = () => {
  const handleDraw = () => {
  }

  return (
    <div className="App">
      <GameBoard
        handleDraw={handleDraw}
      />

      <PlayerArea />

      <Box />
    </div>
  );
}


export default App;
