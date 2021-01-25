import { useRecoilState } from 'recoil';

import Tracker from '../tracker/';
import Market from '../market/';
import Deck from '../deck/';
import DiscardPile from '../discard-pile/';
import ResearchAccord from '../research-accord/';
import OreExchange from '../ore-exchange/';

import {
  explorationDeckState,
  playerExplorationDrawState,
  explorationDiscardPileState,
} from '../../state/atoms.js';

import { draw } from '../../utils/deck';
import cardBack from '../../assets/card-back-1.png';
import styles from './GameBoard.module.css';

const GameBoard = ({ handleDraw }) => {
  const [explorationDeck] = useRecoilState(explorationDeckState);
  const [playerExplorationDraw, setPlayerExplorationDraw] = useRecoilState(playerExplorationDrawState);
  const [explorationDiscardPile] = useRecoilState(explorationDiscardPileState);

  const handleExplorationDraw = () => {
    setPlayerExplorationDraw([...playerExplorationDraw, ...draw(explorationDeck)]);
  }

  return (
    <div className={styles.board}>
      <h1>Game Board</h1>

      <Tracker name="Session" />

      <div className={styles.middle}>
        <ResearchAccord />
        <Market />
        <OreExchange />

        <div className={styles.end}>
          <div className={styles.reference}>
            Icon Reference...
          </div>

          <div className={styles.explorationDeck}>
            <h2>Exploration Cards</h2>
            <div className={styles.cardStacks}>
              <Deck
                name="Exploration"
                handleDraw={handleExplorationDraw}
                cards={explorationDeck}
                cardBack={cardBack}
              />

              <DiscardPile
                name="Exploration"
                cards={explorationDiscardPile}
                cardBack={cardBack}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
