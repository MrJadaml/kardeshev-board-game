import React from 'react';
import {
  Hexagon,
  HexEngine,
} from "react-hex-engine";

const HexMap = () => (
  <HexEngine
    width={280}
    height={60}
    viewBox={{
      x: -20,
      y: -20,
      width: 30,
      height: 30,
    }}
    spacing={1.05}
  >
    <Hexagon q={-4} r={2} s={1} />
    <Hexagon q={-3} r={1} s={1} />
    <Hexagon q={-2} r={1} s={1} />
    <Hexagon q={-1} r={0} s={1} />
    <Hexagon q={0} r={0} s={0} />
    <Hexagon q={1} r={-1} s={0} />
    <Hexagon q={2} r={-1} s={0} />
    <Hexagon q={3} r={-2} s={0} />
  </HexEngine>
);

export default HexMap;

