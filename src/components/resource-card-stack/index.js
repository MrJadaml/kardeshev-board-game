import { useState } from 'react';
import { useDrop } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import styles from './ResourceCardStack.module.css';
import { getCardResourceList } from '../../utils/deck/';

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
          {getCardResourceList(card.data)}
        </div>
      ))}
    </div>
  );
}

export default ResourceCardStack;
