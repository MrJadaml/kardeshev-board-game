import styles from './Tracker.module.css';

const Tracker = ({ name }) => {
  return (
    <div className={styles.tracker}>
      {Array.from({ length: 21 }, (x, step) => (
        <div className={styles.step}>
          {step}
        </div>
      ))}
    </div>
  );
}


export default Tracker;
