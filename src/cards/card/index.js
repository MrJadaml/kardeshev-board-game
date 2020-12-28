import styles from './Card.module.css';

const Card = ({ data, handleDiscard }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h4>{data.name}</h4>
        <div>{data.description}</div>
        <div>{data.flavorText}</div>
      </div>
      <div>
        <button onClick={() => {}}>Play</button>
        <button onClick={handleDiscard}>Discard</button>
      </div>
    </div>
  );
}

export default Card;
