import styles from './OreExchange.module.css';
import cardBack from '../../assets/card-back-1.png';

const OreExchange = () => {
  return (
    <div>
      <div>Ore Exchange</div>

      <div className={styles.oreExchange}>
        {Array.from({ length: 8 }, (x, step) => (
          <div className={styles.step} key={step}>
            {step + 1}
          </div>
        ))}
      </div>

      <div className={styles.deck}>
        Ore Cards...
        <img
          src={cardBack}
          alt="card back"
          className={styles.cardBack}
        />
      </div>
    </div>
  );
}

export default OreExchange;
