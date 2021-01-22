import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";

import meeple from '../../assets/meeple.png';

const style = {
  cursor: 'move',
};

export const Worker = ({ id, removeWorker }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, type: ItemTypes.WORKER },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        removeWorker(item.id);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <img
      id={id}
      src={meeple}
      alt="meeple"
      ref={drag}
      style={{ ...style, opacity }}
    />
  );
};
