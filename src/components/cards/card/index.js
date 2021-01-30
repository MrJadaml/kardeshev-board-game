import { useDrag } from "react-dnd";
import { ItemTypes } from "../../ItemTypes";
import styles from './Card.module.css';
import CardResources from '../../card-resources/';

const Card = ({ data, handleDiscard, handlePlay, handleTake }) => {
  const { id } = data;

  const [{ isDragging }, drag] = useDrag({
    item: { id, type: ItemTypes.CARD, data },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        // removeCard(item.id);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.card}
        style={{ opacity }}
        ref={drag}
        alt="card"
      >
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
            card={data}
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
