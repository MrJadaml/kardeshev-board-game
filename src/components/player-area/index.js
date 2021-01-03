import { useState } from 'react';
import { useRecoilState } from 'recoil';

import Deck from '../deck/';
import DiscardPile from '../discard-pile/';
import CardRiver from '../card-river/';
import FactionBoard from '../faction-board/';

import {
  explorationDeckState,
  playerExplorationDrawState,
  explorationDiscardPileState,
  playerDiscardPileState,
} from '../../state/atoms.js';

import { starterCards } from '../../content/cards/faction/starters';
import cardBack from '../../assets/card-back-3.png';
import { draw, shuffle } from '../utils/cards';
import styles from './PlayerArea.module.css';

const PlayerArea = ({ }) => {
  const [explorationDeck, setExplorationDeck] = useRecoilState(explorationDeckState);
  const [playerExplorationDraw, setPlayerExplorationDraw] = useRecoilState(playerExplorationDrawState);
  const [explorationDiscardPile, setExplorationDiscardPile] = useRecoilState(explorationDiscardPileState);

  const [playerDeck, setPlayerDeck] = useState(starterCards);
  const [playerHand, setPlayerHand] = useState([]);
  const [playerDiscardPile, setPlayerDiscardPile] = useRecoilState(playerDiscardPileState);

  const handlePlayerDraw = () => {
    setPlayerHand([...playerHand, ...draw(playerDeck)]);
  }

  const handlePlayerDiscard = (cardID) => {
    let discard;

    const filteredHand = playerHand.filter(card => {
      if (card.id === cardID) {
        discard = card;
        return false;
      }

      return true;
    });

    setPlayerHand(filteredHand);
    setPlayerDiscardPile([discard, ...playerDiscardPile]);
  }

  const handleEndTurn = () => {
    const nextDiscards = [...playerHand, ...playerDiscardPile];

    if (playerDeck.length === 0) {
      setPlayerDeck(shuffle(nextDiscards));
      setPlayerDiscardPile([]);
    } else {
      setPlayerDiscardPile(nextDiscards);
    }

    setPlayerHand([]);
    setExplorationDiscardPile([...playerExplorationDraw, ...explorationDiscardPile]);
    setPlayerExplorationDraw([]);
  }

  return (
    <div className="player-area">
      <h1>Player Area</h1>
      <button onClick={handleEndTurn}>End Turn</button>

      <div>Active Cards - Exos, EAs, PCs, etc..</div>
      <br />

      ------------------------

      <CardRiver
        name="Exploration"
        cards={playerExplorationDraw}
      />

      ------------------------

      <div className={styles.cardStacks}>
        <Deck
          name="Player"
          handleDraw={handlePlayerDraw}
          cards={playerDeck}
          cardBack={cardBack}
        />

        <DiscardPile
          name="Player"
          cards={playerDiscardPile}
          cardBack={cardBack}
        />
      </div>

      <CardRiver
        name="Player"
        cards={playerHand}
        handleDiscard={handlePlayerDiscard}
      />

      <FactionBoard />
    </div>
  );
}


export default PlayerArea;
