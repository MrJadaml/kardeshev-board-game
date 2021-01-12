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

import { moveCardFrom } from '../../utils/deck/';
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

  const [isDiscardsVisible, setIsDiscardsVisible] = useState(false);

  const [cardsInPlay, setCardsInPlay] = useState([]);

  const handleToggleDiscardViewer = () => {
    setIsDiscardsVisible(!isDiscardsVisible)
  }

  const handlePlayerDraw = () => {
    setPlayerHand([...playerHand, ...draw(playerDeck)]);
  }

  const handlePlayerDiscard = (cardID) => {
    const [nextPlayerHand, nextPlayerDiscardPile] = moveCardFrom(
      playerHand,
      playerDiscardPile,
      cardID,
    );

    setPlayerHand(nextPlayerHand);
    setPlayerDiscardPile(nextPlayerDiscardPile);
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

  const handleTake = (cardID) => {
    const [nextPlayerExplorationDraw, nextCardsInPlay] = moveCardFrom(
      playerExplorationDraw,
      cardsInPlay,
      cardID
    );

    setPlayerExplorationDraw(nextPlayerExplorationDraw);
    setCardsInPlay(nextCardsInPlay);
  }

  return (
    <div className="player-area">
      <h1>Player Area</h1>
      <button onClick={handleEndTurn}>End Turn</button>

      <div>Active Cards - Exos, EAs, PCs, etc..</div>

      <CardRiver
        name="In Play"
        cards={cardsInPlay}
      />

      <br />

      ------------------------

      <CardRiver
        name="Exploration"
        cards={playerExplorationDraw}
        handleTake={handleTake}
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
          handlePeek={handleToggleDiscardViewer}
        />
      </div>

      <CardRiver
        name="Player"
        cards={playerHand}
        handleDiscard={handlePlayerDiscard}
      />

      {isDiscardsVisible && (
        <div className={styles.discardView}>
          <CardRiver
            name="Discards"
            cards={playerDiscardPile}
          />
        </div>
      )}


      <FactionBoard />
    </div>
  );
}


export default PlayerArea;
