import { useState } from 'react';

import Deck from '../deck/';
import DiscardPile from '../discard-pile/';
import Card from '../cards/card/';

import { draw, shuffle } from '../utils/cards';
import { starterCards } from '../content/cards/faction/starters';
import cardBack from '../assets/card-back-3.png';

import styles from './Market.module.css';

import { cloneDeep } from 'lodash';

const Market = () => {
  const [techDeck, setTechDeck] = useState(shuffle(starterCards));
  const [techHand, setTechHand] = useState([null, null, null, null, null, null, null, null]);
  const [techDiscardPile, setTechDiscardPile] = useState([]);

  const handleTechDraw = () => {
    const openSlot = techHand.indexOf(null);

    if (openSlot === -1) {
      console.log('no card drawn')
      return;
    }

    const techHandClone = cloneDeep(techHand);

    techHandClone.splice(openSlot, 1, draw(techDeck)[0])
    setTechHand(techHandClone);
  }

  const handleTechDiscard = (cardID) => {
    let discard;

    const filteredHand = techHand.filter(card => {
      if (card.id === cardID) {
        discard = card;
        return false;
      }

      return true;
    });

    setTechHand(filteredHand);
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

          <div className={styles.cardSlot}>
            {techHand[0] && (
              <>
                <h4>{techHand[0].name}</h4>
                <div>{techHand[0].description}</div>
                ---
                <div>{techHand[0].flavorText}</div>
              </>
            )}
          </div>

          <div className={styles.cardSlot}>
            {techHand[1] && (
              <>
                <h4>{techHand[1].name}</h4>
                <div>{techHand[1].description}</div>
                ---
                <div>{techHand[1].flavorText}</div>
              </>
            )}
          </div>

          <div className={styles.cardSlot}>
            {techHand[2] && (
              <>
                <h4>{techHand[2].name}</h4>
                <div>{techHand[2].description}</div>
                ---
                <div>{techHand[2].flavorText}</div>
              </>
            )}
          </div>

          <div className={styles.cardSlot}>
            {techHand[3] && (
              <>
                <h4>{techHand[3].name}</h4>
                <div>{techHand[3].description}</div>
                ---
                <div>{techHand[3].flavorText}</div>
              </>
            )}
          </div>
        </div>

        <div className={styles.row}>
          <DiscardPile
            name="Technology"
            cards={[]}
            cardBack={cardBack}
          />

          <div className={styles.cardSlot}>
            {techHand[4] && (
              <>
                <h4>{techHand[4].name}</h4>
                <div>{techHand[4].description}</div>
                ---
                <div>{techHand[4].flavorText}</div>
              </>
            )}
          </div>

          <div className={styles.cardSlot}>
            {techHand[5] && (
              <>
                <h4>{techHand[5].name}</h4>
                <div>{techHand[5].description}</div>
                ---
                <div>{techHand[5].flavorText}</div>
              </>
            )}
          </div>

          <div className={styles.cardSlot}>
            {techHand[6] && (
              <>
                <h4>{techHand[6].name}</h4>
                <div>{techHand[6].description}</div>
                ---
                <div>{techHand[6].flavorText}</div>
              </>
            )}
          </div>

          <div className={styles.cardSlot}>
            {techHand[7] && (
              <>
                <h4>{techHand[7].name}</h4>
                <div>{techHand[7].description}</div>
                ---
                <div>{techHand[7].flavorText}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Market;
