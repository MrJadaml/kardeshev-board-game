import { useState } from 'react';
import { useRecoilState } from 'recoil';

import Deck from '../deck/';
import DiscardPile from '../discard-pile/';
import MarketSlot from '../market-slot/';

import { draw, shuffle } from '../utils/cards';
import { starterCards } from '../../content/cards/exploration/';
import { techDrawState } from '../../state/atoms.js';
import cardBack from '../../assets/card-back-3.png';

import styles from './Market.module.css';

import { cloneDeep } from 'lodash';

const Market = () => {
  const [techDeck, setTechDeck] = useState(shuffle(starterCards));
  const [techDraw, setTechDraw] = useRecoilState(techDrawState);
  const [techDiscardPile, setTechDiscardPile] = useState([]);

  const handleTechDraw = () => {
    const openSlot = techDraw.indexOf(null);

    if (openSlot === -1) {
      console.log('no card drawn')
      return;
    }

    const techDrawClone = cloneDeep(techDraw);

    techDrawClone.splice(openSlot, 1, draw(techDeck)[0])
    setTechDraw(techDrawClone);
  }

  const handleTechDiscard = (cardID) => {
    let discard;

    const filteredHand = techDraw.filter(card => {
      if (card.id === cardID) {
        discard = card;
        return false;
      }

      return true;
    });

    setTechDraw(filteredHand);
    setTechDiscardPile([discard, ...techDiscardPile]);
  }

  return (
    <div className="game-board">
      <div className={styles.cardMarket}>
        <div className={styles.row}>
          <Deck
            name="Technology"
            handleDraw={handleTechDraw}
            cards={techDeck}
            cardBack={cardBack}
          />

          {techDraw.slice(0,4).map((card, idx) => (
            <MarketSlot
              card={card}
              marketIdx={idx}
              key={`${card}-${idx}`}
            />
          ))}
        </div>

        <div className={styles.row}>
          <DiscardPile
            name="Technology"
            cards={[]}
            cardBack={cardBack}
          />

          {techDraw.slice(4,8).reverse().map((card, idx) => (
            <MarketSlot
              card={card}
              marketIdx={idx+4}
              key={`${card}-${idx}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Market;
