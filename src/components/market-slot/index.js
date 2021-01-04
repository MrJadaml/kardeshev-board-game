import styles from './MarketSlot.module.css';
import { useRecoilState } from 'recoil';
import { useState } from 'react';

import meeple from '../../assets/meeple.png';
import {
  playerDiscardPileState,
  techDrawState,
} from '../../state/atoms.js';

const MarketSlot = ({ card, marketIdx }) => {
  const [techDraw, setTechDraw] = useRecoilState(techDrawState);
  const [playerDiscardPile, setPlayerDiscardPile] = useRecoilState(playerDiscardPileState);
  const [isMeeple, setMeeple] = useState(false)

  const handleDragEnd = () => {
    setMeeple(false);
  }

  const handleDrop = (e) => {
    console.log('drop')
    e.preventDefault();
    setMeeple(true)
  }

  const handleDragOver = (e) => {
    console.log('drag over')
    e.preventDefault();
  }

  const handleTake = () => {
    const nextTechDraw = techDraw.reduce((acc, card, idx) => {
      if (idx === marketIdx) {
        acc.push(null);
        return acc;
      }

      acc.push(card);
      return acc;
    }, []);

    setPlayerDiscardPile([card, ...playerDiscardPile]);
    setTechDraw(nextTechDraw);
  }

  return (
    <div className={styles.marketSlot}>
      <div className={styles.cardSlot}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {isMeeple && <img src={meeple} alt="meeple" draggable="true" id="p1" />}

        {card && (
          <div>
            <h4>{card.name}</h4>
            <div>{card.description}</div>
            ---
            <div>{card.flavorText}</div>
          </div>
        )}
      </div>

      {card && <button onClick={handleTake}>Take</button>}
    </div>
  );
}

export default MarketSlot;
