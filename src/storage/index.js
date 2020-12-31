import styles from './Storage.module.css';
import {
  Hexagon,
  HexEngine,
} from "react-hex-engine";

const Storage = () => {
  return (
    <div className={styles.storage}>
      <HexEngine
        width={260}
        height={40}
        viewBox={{
          x: -25,
          y: -10,
          width: 20,
          height: 20,
        }}
        spacing={1.05}
      >
        <Hexagon q={-4} r={2} s={1} />
        <Hexagon q={-2} r={1} s={1} />
        <Hexagon q={0} r={0} s={0} />
        <Hexagon q={2} r={-1} s={0} />
      </HexEngine>
    </div>
  );
}

export default Storage;
