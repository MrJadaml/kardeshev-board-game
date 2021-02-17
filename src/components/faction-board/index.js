import styles from './FactionBoard.module.css';
import HexMap from '../hex-map/';
import Workers from '../workers/';
import Buildings from '../buildings/';
import ResourceCardStack from '../resource-card-stack/';

const FactionBoard = () => {
  const reputation = [10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10];

  return (
    <div className={styles.factionBoard}>
      <div className={styles.resourceCache}>
        <ResourceCardStack type="ore" />
        <ResourceCardStack type="science" />
        <ResourceCardStack type="credits" />
      </div>

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
              <div className={styles.reputation} key={value}>
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
    </div>
  );
}

export default FactionBoard;
