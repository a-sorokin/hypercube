import { GeometricObject } from 'types/cubeTypes';

export const createCube = (square: GeometricObject, delta: number) => {
  const cube = structuredClone(square);

  square.forEach((line) => {
    const { x: x0, y: y0 } = line[0];
    const { x: x1, y: y1 } = line[1];

    cube.push([
      { x: x0 + delta, y: y0 - delta },
      { x: x1 + delta, y: y1 - delta },
    ]);

    cube.push([
      { x: x0, y: y0 },
      { x: x0 + delta, y: y0 - delta },
    ]);
  });

  return cube;
};
