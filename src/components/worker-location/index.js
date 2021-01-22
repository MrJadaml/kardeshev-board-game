import React from "react";
import { useState } from 'react';
import { useDrop } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { Worker } from '../worker/';

const style = {
  height: '100%',
  width: '100%',
};

export const WorkerLocation = ({ initialWorkers = [] }) => {
  const [workers, setWorkers] = useState(initialWorkers);

  const [, drop] = useDrop({
    accept: ItemTypes.WORKER,
    drop: (item) => {
      setWorkers([ ...workers, item]);
    },
  });

  const removeWorker = (workerID) => {
    const nextWorkers = workers.filter(worker => {
      if (worker.id === workerID) {
        return false;
      }

      return true;
    });

    setWorkers(nextWorkers);
  }

  return (
    <div ref={drop} style={{ ...style }}>
      {workers.map(worker => (
        <Worker
          id={worker.id}
          removeWorker={removeWorker}
        />
      ))}
    </div>
  );
};
