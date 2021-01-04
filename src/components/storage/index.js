import { useState } from 'react';

import {
  HexGrid,
  Layout,
  Hexagon,
  Pattern,
} from 'react-hexgrid';

import hexShips from '../../assets/hex-ship.png';
import hexOre from '../../assets/hex-mine.png';
import hexLab from '../../assets/hex-lab.png';
import hexCity from '../../assets/hex-city.png';

import styles from './Storage.module.css';

const Storage = ({ buildingType }) => {
  const HEX_SIZE = { x: 42, y: 42 };

  const initHexes = [
    { q: -4, r: 2, s: 1 },
    { q: -2, r: 1, s: 1 },
    { q: 0, r: 0, s: 0 },
    { q: 2, r: -1, s: 0 },
  ]

  const [hexes, setHexes] = useState(initHexes);

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
    <div className={styles.storage}>
      <HexGrid
        width={260}
        height={40}
      >
        <Layout size={HEX_SIZE}>
          {hexes.map((hex) => (
            <Hexagon
              key={`${buildingType}-${hex.q}`}
              {...hex}
              fill={`pat-${buildingType}`}
              onClick={handleClick}
            />
          ))};
        </Layout>

        <Pattern id="pat-1" link={hexShips} size={HEX_SIZE} />
        <Pattern id="pat-2" link={hexOre}  size={HEX_SIZE} />
        <Pattern id="pat-3" link={hexLab}  size={HEX_SIZE} />
        <Pattern id="pat-4" link={hexCity}  size={HEX_SIZE} />
      </HexGrid>
    </div>
  );
}

export default Storage;
