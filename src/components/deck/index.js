import styles from './Deck.module.css';

const Deck = ({ cards, cardBack, name, handleDraw, handlePeek }) => {
  return (
    <div className={styles.deck}>
      <div> {cards.length} cards left</div>
      <img
        src={cardBack}
        alt="card back"
        className={styles.cardBack}
      />
      <div>{name} Deck</div>

      <div>
        <button onClick={handleDraw}>Draw</button>
        {handlePeek && <button onClick={handlePeek}>Peek</button>}
      </div>

      <br />
    </div>
  );
}

export default Deck;
