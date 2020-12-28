import styles from './CardRiver.module.css';

import Card from '../cards/card/';

const CardRiver = ({ cards, name, handleDiscard }) => {
  return (
    <div className={styles.cardRiver}>
      <div>{name} Card River</div>

      <div className={styles.cards}>
        {cards.map(card =>
          <Card
            key={card.id}
            data={card}
            handleDiscard={() => {handleDiscard(card.id)}}
          />
        )}
      </div>

      <br />
    </div>
  );
}


export default CardRiver;
