import styles from './FactionBoard.module.css';
import HexMap from '../hex-map/';
import Workers from '../workers/';

const FactionBoard = () => {
  return (
    <div className={styles.Board}>
      <div className={styles.header}>
        <div className={styles.bio}>
          Faction Name
        </div>
        <div className={styles.workers}>
          <Workers />
        </div>
        <div className={styles.survey}>
        </div>
      </div>
      <HexMap />
    </div>
  );
}

export default FactionBoard;
