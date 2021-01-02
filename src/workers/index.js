import React from 'react';
import {
  HexGrid,
  Layout,
  Hexagon
} from 'react-hexgrid';

const Workers = () => (
  <HexGrid
    width={292}
    height={80}
  >
    <Layout
      size={{
        x: 25,
        y: 25,
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
    </Layout>
  </HexGrid>
);

export default Workers;

