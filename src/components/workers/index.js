import React from 'react';
import { useState } from 'react';
import meeple from '../../assets/meeple.png';

import {
  HexGrid,
  Layout,
  Hexagon,
  Text,
} from 'react-hexgrid';

import styles from './Workers.module.css';

const Workers = () => {
  const initHexes = [
    { id: 1, text: '', q: -4, r: 2, s: 1 },
    { id: 2, text: '-ç', q: -3, r: 1,  s: 1 },
    { id: 3, text: '-ç', q: -2, r: 1,  s: 1 },
    { id: 4, text: '-ç', q: -1, r: 0,  s: 1 },
    { id: 5, text: '-ç', q: 0, r: 0,  s: 0 },
    { id: 6, text: '-ç', q: 1, r: -1,  s: 0 },
    { id: 7, text: '-∆', q: 2, r: -1,  s: 0 },
    { id: 8, text: '-§', q: 3, r: -2,  s: 0 },
  ];

  const [hexes, setHexes] = useState(initHexes);
  const [isMeeple, setMeeple] = useState(true)

  const handleDragEnd = () => {
    setMeeple(false);
  }

  const handleDrop = (e) => {
    console.log('drop')
    e.preventDefault();
    setMeeple(true)
  }

  const handleDragOver = (e) => {
    console.log('drag over')
    e.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
  }
  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      {isMeeple && <img src={meeple} alt="meeple" draggable="true" id="p1" />}

    <HexGrid
      width={292}
      height={80}
    >
      <Layout
        size={{
          x: 25,
          y: 25,
        }}
        spacing={1.05}
      >
        {hexes.map((hex, idx) => (
          <Hexagon
            {...hex}
            className={styles.workerHex}
          >
            <Text className={styles.hexText}>
              {hex.text}
            </Text>
          </Hexagon>
        ))};
      </Layout>
    </HexGrid>
  </div>
  );
}

export default Workers;

