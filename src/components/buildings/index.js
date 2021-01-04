import styles from './Buildings.module.css';
import Storage from '../storage/';
const Buildings = () => {
  return (
    <div className={styles.buildings}>
      <div className={styles.title}>Buildings</div>
      <br />

      <div className={styles.storage}>
        <div className={styles.name}>
          Starships
        </div>
        <Storage buildingType={1} />
      </div>

      <div className={styles.storage}>
        <div className={styles.name}>
          Ore
        </div>
        <Storage buildingType={2} />
      </div>

      <div className={styles.storage}>
        <div className={styles.name}>
          Science
        </div>
        <Storage buildingType={3} />
      </div>

      <div className={styles.storage}>
        <div className={styles.name}>
          Credits
        </div>
        <Storage buildingType={4} />
      </div>

      <br />
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
