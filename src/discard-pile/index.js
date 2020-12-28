import styles from './DiscardPile.module.css';

const DiscardPile = ({ cards, name }) => {
  return (
    <div className={styles.discardPile}>
      <div> {cards.length} cards</div>
      <div> [ pile ] </div>
      <div>{name} Discard Pile</div>

      <div>
        <button onClick={() => {}}>Shuffle</button>
        <button onClick={() => {}}>Peek</button>
      </div>

      <br />
    </div>
  );
}


export default DiscardPile;
