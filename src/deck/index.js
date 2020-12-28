import styles from './Deck.module.css';

const Deck = ({ cards, name, handleDraw }) => {
  return (
    <div className={styles.deck}>
      <div> {cards.length} cards left</div>
      <div> [ deck ] </div>
      <div>{name} Deck</div>

      <div>
        <button onClick={handleDraw}>Draw 3</button>
        <button onClick={() => {}}>Peek</button>
      </div>

      <br />
    </div>
  );
}


export default Deck;
