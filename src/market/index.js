import Deck from '../deck/';
import DiscardPile from '../discard-pile/';
import cardBack from '../assets/card-back-3.png';

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
          cardBack={cardBack}
        />

        <DiscardPile
          name="Technology"
          cards={[]}
          cardBack={cardBack}
        />
      </div>
    </div>
  );
}


export default Market;
