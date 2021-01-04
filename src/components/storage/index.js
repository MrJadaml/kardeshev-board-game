import { useState } from 'react';

import {
  HexGrid,
  Layout,
  Hexagon,
  Pattern,
  Text,
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
    { id: 1, fill: `buildingHex-${buildingType}`, text: '+1 Worker', q: -4, r: 2, s: 1 },
    { id: 2, fill: `buildingHex-${buildingType}`, text: '+1 build', q: -2, r: 1, s: 1 },
    { id: 3, fill: `buildingHex-${buildingType}`, text: '+1 Worker', q: 0, r: 0, s: 0 },
    { id: 4, fill: `buildingHex-${buildingType}`, text: '+1 Faction Card', q: 2, r: -1, s: 0 },
  ]

  const [hexes, setHexes] = useState(initHexes);
  const [isMeeple, setMeeple] = useState(false)

  const handleDragEnd = () => {
    setMeeple(false);
  }

  const handleDrop = (e) => {
    e.preventDefault();
    setMeeple(true)
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleClick = (e, hex) => {
    const hexIndex = hexes.findIndex((hexagon) => {
      return hexagon.id === hex.props.id
    });

    const nextHex = {
      ...hex,
      props: {
        ...hex.props,
        fill: null,
        className: styles.unlocked,
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
            >
              {!hex.fill && (
                <Text className={styles.hexText}>
                  {hex.text}
                </Text>
              )}
            </Hexagon>
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
