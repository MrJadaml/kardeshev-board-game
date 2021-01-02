import React from 'react';
import { useState } from 'react';

import { deepClone } from 'lodash';

import './stuff.css';
import styles from './HexMap.module.css';

import {
  Hexagon,
  HexEngine,
  GridGenerator,
} from "react-hex-engine";

const HexMap = () => {
  const initHexes = GridGenerator
    .hexagon(3)
    .map((hex, idx) => ({ ...hex, id: idx }))

  initHexes.push({
    q: -3,
    r: 5,
    s: -3,
    id: 38,
    className: 'satellite'
  })

  const [hexes, setHexes] = useState(initHexes);

  const handleClick = (e, hex) => {
    console.log(hex)
    const hexIndex = hexes.findIndex((hexagon) => {
      return hexagon.id === hex.id
    });

    // hex.selected = true;
    // hex.classes = { highlighted: 'highlighted' }
    const nextHexes = []

    // setHexes = nextHexes;
  }

  return (
    <HexEngine
      width={420}
      height={420}
      viewBox={{
        x: -100,
        y: -100,
        width: 200,
        height: 200,
      }}
      size={{x: 15,y: 15}}
      origin={{x: 0,y: 0}}
      spacing={1.1}
    >
      {hexes.map(hex => (
        <Hexagon
          {...hex}
          key={hex.toString()}
          onClick={handleClick}
          className={hex.className}
        />
      ))}
    </HexEngine>
  );
}

export default HexMap;

