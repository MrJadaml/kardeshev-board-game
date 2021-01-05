import styles from './DiscardPile.module.css';
const DiscardPile = ({ cards, cardBack, handlePeek, name }) => {
  return (
    <div className={styles.discardPile}>
      <div> {cards.length} cards</div>
      <img
        src={cardBack}
        alt="card back"
        className={styles.cardBack}
      />
      <div>{name} Discard Pile</div>

      <div>
        <button onClick={() => {}}>Shuffle</button>
        {handlePeek && <button onClick={handlePeek}>Peek</button>}
      </div>

      <br />
    </div>
  );
}


export default DiscardPile;
