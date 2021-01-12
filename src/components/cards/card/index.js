import styles from './Card.module.css';

const Card = ({ data, handleDiscard, handlePlay, handleTake }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h4>{data.name}</h4>
        <div>{data.description}</div>
        ---
        <div>{data.flavorText}</div>
        ---
        <div>{data.resources}</div>
      </div>
      <div>
        {handlePlay && <button onClick={() => {handlePlay(data.id)}}>Play</button>}
        {handleDiscard && <button onClick={() => {handleDiscard(data.id)}}>Discard</button>}
        {handleTake && <button onClick={() => {handleTake(data.id)}}>Take</button>}
      </div>
    </div>
  );
}

export default Card;
