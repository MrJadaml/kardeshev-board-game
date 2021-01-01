import styles from './Deck.module.css';

const Deck = ({ cards, cardBack, name, handleDraw }) => {
  return (
    <div className={styles.deck}>
      <div> {cards.length} cards left</div>
      <img
        src={cardBack}
        className={styles.cardBack}
      />
      <div>{name} Deck</div>

      <div>
        <button onClick={handleDraw}>Draw</button>
        <button onClick={() => {}}>Peek</button>
      </div>

      <br />
    </div>
  );
}


export default Deck;
