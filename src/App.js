import './App.css';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

import GameBoard  from './components/game-board/'
import PlayerArea  from './components/player-area/'

const App = () => {
  return (
    <RecoilRoot>
      <div className="App">
        <GameBoard />
        <PlayerArea />
      </div>
    </RecoilRoot>
  );
}

export default App;
