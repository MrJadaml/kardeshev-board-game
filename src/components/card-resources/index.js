import styles from './CardResources.module.css';
import { times } from 'lodash';

const CardResources = ({ resources = [], oneTimeResource }) => {
  const getResourceList = () => {
    return resources.reduce((acc, resource, idx) => {
      const resourceCount = resource[Object.keys(resource)[0]];
      const resourceList = times(resourceCount, () => Object.keys(resource)[0]);
      return [...acc, ...resourceList];
    }, [])
  }

  // TODO: change resouce text to svg icons for resouces
  // TODO: if cardType === 'resource' make icons larger and centered
  return (
    <div className={styles.resources}>
      {getResourceList().map(resource => (
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
