import styles from './Card.module.css';

const Card = ({ data, handleDiscard, handlePlay }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h4>{data.name}</h4>
        <div>{data.description}</div>
        ---
        <div>{data.flavorText}</div>
      </div>
      <div>
        {handlePlay && <button onClick={handlePlay}>Play</button>}
        {handleDiscard && <button onClick={handleDiscard}>Discard</button>}
      </div>
    </div>
  );
}

export default Card;
