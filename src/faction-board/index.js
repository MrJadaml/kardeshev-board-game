import styles from './FactionBoard.module.css';
import HexMap from '../hex-map/';
import Workers from '../workers/';
import Buildings from '../buildings/';
import Satellite from '../satellite/';

const FactionBoard = () => {
  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <div className={styles.bio}>
          Faction Name
        </div>
        <div className={styles.workers}>
          <Workers />
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.side}>
          <div className={styles.abilities}>
            Faction Abilities...
          </div>
          <div className={styles.buildings}>
            <Buildings />
          </div>
        </div>
        <HexMap />
        <div className={styles.satellite}>
          <Satellite />
        </div>
      </div>
    </div>
  );
}

export default FactionBoard;
