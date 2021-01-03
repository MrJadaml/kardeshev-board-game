import styles from './Buildings.module.css';
import Storage from '../storage/';
const Buildings = () => {
  return (
    <div className={styles.buildings}>
      <div className={styles.title}>Buildings</div>

      <div className={styles.storage}>
        <div className={styles.name}>
          Starships
        </div>
        <Storage />
      </div>

      <div className={styles.storage}>
        <div className={styles.name}>
          Ore
        </div>
        <Storage />
      </div>

      <div className={styles.storage}>
        <div className={styles.name}>
          Science
        </div>
        <Storage />
      </div>

      <div className={styles.storage}>
        <div className={styles.name}>
          Credits
        </div>
        <Storage />
      </div>

      <div className={styles.production}>
        <div className={styles.production}>
          Mine / Lab
        </div>
        <div className={styles.production}>
          ( ..... ) / ( ..... )
        </div>
      </div>
    </div>
  );
}

export default Buildings;
