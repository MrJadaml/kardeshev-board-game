import styles from './Satellite.module.css';
import {
  Hexagon,
  HexEngine,
} from "react-hex-engine";


const Satellite = () => {
  return (
    <div className={styles.satellite}>
      <HexEngine
        width={60}
        height={60}
        viewBox={{
          x: -10,
          y: -10,
          width: 20,
          height: 20,
        }}
      >
        <Hexagon q={0} r={0} s={0} />
      </HexEngine>
    </div>
  );
}

export default Satellite;
