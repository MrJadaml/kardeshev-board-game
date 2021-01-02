import { GridGenerator } from 'react-hexgrid';

export const getPlanetHexes = (rings = 3, satellite = true) => {
  const planetHexes = GridGenerator
    .hexagon(rings)
    .map((hex, idx) => ({ ...hex, id: idx }))

  if (satellite) {
    planetHexes.push({
      q: -3,
      r: 5,
      s: -3,
      id: 38,
      className: 'satellite'
    })
  }

  return planetHexes;
}
