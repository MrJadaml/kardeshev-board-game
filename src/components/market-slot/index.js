import styles from './MarketSlot.module.css';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { WorkerLocation } from '../worker-location/';
import { ItemTypes } from '../ItemTypes';

import {
  playerDiscardPileState,
  techDrawState,
} from '../../state/atoms.js';

const MarketSlot = ({ card, marketIdx }) => {
  const [techDraw, setTechDraw] = useRecoilState(techDrawState);
  const [playerDiscardPile, setPlayerDiscardPile] = useRecoilState(playerDiscardPileState);

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
      <div className={styles.cardSlot}>
        <WorkerLocation />

        {card && (
          <div>
            <div>Cost: {card.cost}</div>
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
