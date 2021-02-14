import styles from './CardResources.module.css';
import { getCardResourceList } from '../../utils/deck/';
import science from '../../assets/science.png';
import ore from '../../assets/ore.png';
import credits from '../../assets/credits.png';

const icons = {
  science,
  ore,
  credits,
}

const CardResources = ({ card, oneTimeResource }) => {
  // TODO: change resouce text to svg icons for resouces
  // TODO: if cardType === 'resource' make icons larger and centered
  return (
    <div className={styles.resources}>
      {getCardResourceList(card).map(resource => (
        <div
          key={resource}
          className={`${styles.resource} ${oneTimeResource ? styles.oneTimeResource : null}`}
        >
          <img
            className={styles.icon}
            src={icons[resource]}
            alt="science"
          />
        </div>
      ))}
    </div>
  );
}

export default CardResources;
