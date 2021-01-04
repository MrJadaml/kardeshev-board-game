import React from 'react';
import { useState } from 'react';

import {
  HexGrid,
  Layout,
  Hexagon,
  Pattern,
} from 'react-hexgrid';

import { getPlanetHexes } from '../utils/hex/';
import hexDesert from '../../assets/hex-desert.png';
import hexForest from '../../assets/hex-forest.png';
import hexHill from '../../assets/hex-hill.png';
import hexPlainsForest from '../../assets/hex-plains-forest.png';
import hexPlains from '../../assets/hex-plains.png';
import hexWater from '../../assets/hex-water.png';

import './stuff.css';

const HexMap = () => {
  const [hexes, setHexes] = useState(getPlanetHexes());

  const handleClick = (e, hex) => {
    const hexIndex = hexes.findIndex((hexagon) => {
      return hexagon.id === hex.props.id
    });

    const randomNumber = Math.floor(Math.random() * (8-2)+1);
    const nextHex = {
      ...hex,
      props: {
        ...hex.props,
        fill: `pat-${randomNumber}`,
      },
    }

    const nextHexes = [...hexes];
    nextHexes[hexIndex] = nextHex.props;
    setHexes(nextHexes);
  }

  return (
    <HexGrid
      width={520}
      height={420}
    >
      <Layout size={{
          x: 6,
          y: 6,
        }}
        spacing={1.1}
      >
        {hexes.map(hex => (
          <Hexagon
            {...hex}
            key={hex.id}
            onClick={handleClick}
          />
        ))}
      </Layout>
      <Pattern id="pat-1" link={hexDesert} />
      <Pattern id="pat-2" link={hexForest} />
      <Pattern id="pat-3" link={hexHill} />
      <Pattern id="pat-4" link={hexPlainsForest} />
      <Pattern id="pat-5" link={hexPlains} />
      <Pattern id="pat-6" link={hexWater} />
    </HexGrid>
  );
}

export default HexMap;

