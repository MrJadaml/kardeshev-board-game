import React from 'react';
import {
  Hexagon,
  HexEngine,
  GridGenerator,
} from "react-hex-engine";

const HexMap = () => (
  <HexEngine
    width={620}
    height={440}
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
    {GridGenerator.hexagon(3).map(hex => (
      <Hexagon {...hex} key={hex.toString()} />
    ))}
  </HexEngine>
);

export default HexMap;

