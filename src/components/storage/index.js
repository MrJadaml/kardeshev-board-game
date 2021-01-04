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
import meeple from '../../assets/meeple.png';

import styles from './Storage.module.css';

const Storage = ({ buildingType }) => {
  const HEX_SIZE = { x: 42, y: 42 };

  const initHexes = [
    { id: 1, q: -4, r: 2, s: 1 },
    { id: 2, q: -2, r: 1, s: 1 },
    { id: 3, q: 0, r: 0, s: 0 },
    { id: 4, q: 2, r: -1, s: 0 },
  ]

  const [hexes, setHexes] = useState(initHexes);
  const [isMeeple, setMeeple] = useState(false)

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
  }

  const handleClick = (e, hex) => {
    const hexIndex = hexes.findIndex((hexagon) => {
      return hexagon.id === hex.props.id
    });

    const randomNumber = Math.floor(Math.random() * (8-2)+1);

    const nextHex = {
      ...hex,
      props: {
        ...hex.props,
        fill: `buildingHex-${buildingType}`,
      },
    }

    const nextHexes = [...hexes];
    nextHexes[hexIndex] = nextHex.props;
    setHexes(nextHexes);
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      className={styles.storage}
    >
      {isMeeple && <img src={meeple} alt="meeple" draggable="true" id="p1" />}

      <HexGrid
        width={260}
        height={40}
      >
        <Layout size={HEX_SIZE}>
          {hexes.map((hex, idx) => (
            <Hexagon
              className={styles.hex}
              key={`${idx}-${hex.q}`}
              {...hex}
              onClick={handleClick}
            />
          ))};
        </Layout>

        <Pattern id="buildingHex-1" link={hexShips} size={HEX_SIZE} />
        <Pattern id="buildingHex-2" link={hexOre}  size={HEX_SIZE} />
        <Pattern id="buildingHex-3" link={hexLab}  size={HEX_SIZE} />
        <Pattern id="buildingHex-4" link={hexCity}  size={HEX_SIZE} />
      </HexGrid>
    </div>
  );
}

export default Storage;
