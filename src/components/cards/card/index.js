import styles from './Card.module.css';
import CardResources from '../../card-resources/';

const Card = ({ data, handleDiscard, handlePlay, handleTake }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h4>{data.name}</h4>
        <div>{data.description}</div>

        {data.cardType !== 'resource' && (
          <>
            ---
            <div>{data.flavorText}</div>
          </>
        )}

        {data.resources && (
          <CardResources
            resources={data.resources}
            oneTimeResource={data.oneTimeResource}
          />
        )}
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
