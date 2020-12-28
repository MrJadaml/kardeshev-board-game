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
          cards={[]}
        />

        <DiscardPile
          name="Exploration"
          cards={[]}
        />
      </div>
    </div>
  );
}


export default GameBoard;
