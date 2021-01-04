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

import styles from './HexMap.module.css';
import './stuff.css';

const HexMap = () => {
  const HEX_SIZE = { x: 6, y: 6 };
  const [hexes, setHexes] = useState(getPlanetHexes());

  const handleClick = (e, hex) => {
    const hexIndex = hexes.findIndex((hexagon) => {
      return hexagon.id === hex.props.id
    });

    const randomNumber = Math.floor(Math.random() * 6) + 1;

    const nextHex = {
      ...hex,
      props: {
        ...hex.props,
        fill: `mapHex-${randomNumber}`,
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
      <Layout
        size={HEX_SIZE}
        spacing={1.03}
      >
        {hexes.map(hex => (
          <Hexagon
            className={styles.hex}
            {...hex}
            key={hex.id}
            onClick={handleClick}
          />
        ))}
      </Layout>

      <Pattern id="mapHex-1" link={hexDesert} size={HEX_SIZE} />
      <Pattern id="mapHex-2" link={hexForest} size={HEX_SIZE} />
      <Pattern id="mapHex-3" link={hexHill} size={HEX_SIZE} />
      <Pattern id="mapHex-4" link={hexPlainsForest} size={HEX_SIZE} />
      <Pattern id="mapHex-5" link={hexPlains} size={HEX_SIZE} />
      <Pattern id="mapHex-6" link={hexWater} size={HEX_SIZE} />
    </HexGrid>
  );
}

export default HexMap;

