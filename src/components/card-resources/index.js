import styles from './CardResources.module.css';
import { getCardResourceList } from '../../utils/deck/';

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
          {resource}
        </div>
      ))}
    </div>
  );
}

export default CardResources;
