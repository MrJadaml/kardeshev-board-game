import styles from './FactionBoard.module.css';
import HexMap from '../hex-map/';
import Workers from '../workers/';
import Buildings from '../buildings/';
import Satellite from '../satellite/';

const FactionBoard = () => {
  const reputation = [10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10];

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
        <div className={styles.reputationTrack}>
          {reputation.map((value) => (
            <div className={styles.reputation}>
              {value}
            </div>
          ))}
        </div>

        <div className={styles.side}>
          <div className={styles.abilities}>
            Faction Abilities...
          </div>
          <div className={styles.buildings}>
            <Buildings />
          </div>
        </div>

        <HexMap />
      </div>
    </div>
  );
}

export default FactionBoard;
