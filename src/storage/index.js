import styles from './Storage.module.css';

import {
  HexGrid,
  Layout,
  Hexagon
} from 'react-hexgrid';

const Storage = () => {
  return (
    <div className={styles.storage}>
      <HexGrid
        width={260}
        height={40}
      >
        <Layout
          size={{
            x: 42,
            y: 42,
          }}
        >
          <Hexagon q={-4} r={2} s={1} />
          <Hexagon q={-2} r={1} s={1} />
          <Hexagon q={0} r={0} s={0} />
          <Hexagon q={2} r={-1} s={0} />
        </Layout>
      </HexGrid>
    </div>
  );
}

export default Storage;
