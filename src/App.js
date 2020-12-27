import './App.css';
import { ExoCard } from './cards/ExoCard'
import { cards } from './data/cards';
import { deal, discard } from './utils/cards';

const App = () => {
  const handleDraw = () => {
    console.log(deal(cards))

  }

  return (
    <div className="App">
      <button onClick={handleDraw}>
        Draw
      </button>
    {cards.map(card =>
      <ExoCard data={card} />
    )}
    </div>
  );
}


export default App;
