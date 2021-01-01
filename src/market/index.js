import Deck from '../deck/';
import DiscardPile from '../discard-pile/';
import cardBack from '../assets/card-back-3.png';

import styles from './Market.module.css';

const Market = () => {
  return (
    <div className="game-board">
      <div className={styles.cardMarket}>
        <div className={styles.row}>
          <Deck
            name="Technology"
            handleDraw={() => {}}
            cards={[]}
            cardBack={cardBack}
          />

          <div className={styles.cardSlot}>
          </div>
          <div className={styles.cardSlot}>
          </div>
          <div className={styles.cardSlot}>
          </div>
          <div className={styles.cardSlot}>
          </div>
        </div>

        <div className={styles.row}>
          <DiscardPile
            name="Technology"
            cards={[]}
            cardBack={cardBack}
          />

          <div className={styles.cardSlot}>
          </div>
          <div className={styles.cardSlot}>
          </div>
          <div className={styles.cardSlot}>
          </div>
          <div className={styles.cardSlot}>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Market;
