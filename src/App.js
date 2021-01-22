import './App.css';
import { RecoilRoot } from 'recoil';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import GameBoard  from './components/game-board/'
import PlayerArea  from './components/player-area/'

const App = () => {
  return (
    <RecoilRoot>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <GameBoard />
          <PlayerArea />
        </div>
      </DndProvider>
    </RecoilRoot>
  );
}

export default App;
