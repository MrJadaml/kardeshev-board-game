import { useState } from 'react';
import { useDrop } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import styles from './ResourceCardStack.module.css';
import { getCardResourceList } from '../../utils/deck/';
import science from '../../assets/science.png';
import ore from '../../assets/ore.png';
import credits from '../../assets/credits.png';

const icons = {
  science,
  ore,
  credits,
}

const ResourceCardStack = ({ type }) => {
  const [cards, setCards] = useState([]);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => {
      console.log(item)
      setCards([ ...cards, item]);
    },
  });

  const removeCard = (cardID) => {
    const nextCard = cards.filter(card => {
      if (card.id === cardID) {
        return false;
      }

      return true;
    });

    setCards(nextCard);
  }

  return (
    <div
      ref={drop}
      className={styles.cardLocation}
    >
      {cards.map(card => (
        <div className={styles.cardStack}>
          {getCardResourceList(card.data).map(resource => (
            <img
              className={styles.icon}
              src={icons[resource]}
              alt="science"
            />
          ))}

        </div>
      ))}
    </div>
  );
}

export default ResourceCardStack;
