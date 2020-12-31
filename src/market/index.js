import Deck from '../deck/';
import DiscardPile from '../discard-pile/';

import styles from './Market.module.css';

const Market = () => {
  return (
    <div className="game-board">
      <h2>Market</h2>

      <div className={styles.cardStacks}>
        <Deck
          name="Technology"
          handleDraw={() => {}}
          cards={[]}
        />

        <DiscardPile
          name="Technology"
          cards={[]}
        />
      </div>
    </div>
  );
}


export default Market;
