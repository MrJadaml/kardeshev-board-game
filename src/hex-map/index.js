import React from 'react';
import { useState } from 'react';

import { deepClone } from 'lodash';
import {
  HexGrid,
  GridGenerator,
  Layout,
  Hexagon,
} from 'react-hexgrid';

import { getPlanetHexes } from '../utils/hex/';

import './stuff.css';
import styles from './HexMap.module.css';

const HexMap = () => {
  const [hexes, setHexes] = useState(getPlanetHexes());

  const handleClick = (e, hex) => {
    const hexIndex = hexes.findIndex((hexagon) => {
      return hexagon.id === hex.props.id
    });

    const nextHex = {
      ...hex,
      props: { ...hex.props, className: 'bob' },
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
    </HexGrid>
  );
}

export default HexMap;

