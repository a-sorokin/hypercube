import { useCanvasStore } from 'canvasStore';
import { drawLine } from 'utils/canvasUtils/drawLine';
import { createCube4 } from 'utils/hypercubeUtils/createCube4';
import { createSquare } from 'utils/hypercubeUtils/createSquare';

export const createHypercube = () => {
  const { context } = useCanvasStore.getState();
  if (!context) return;

  let hypercube = createSquare({ x: 50, y: 650 });
  hypercube = createCube4(hypercube, 50, 50);
  hypercube = createCube4(hypercube, 25, 75);
  hypercube = createCube4(hypercube, 180, 50);
  hypercube = createCube4(hypercube, -30, 250);
  hypercube = createCube4(hypercube, 300, 0);
  hypercube = createCube4(hypercube, 150, 100);
  // hypercube = createCube4(hypercube, 150, -100);
  // hypercube = createCube4(hypercube, 150, -100);
  // hypercube = createCube4(hypercube, 50, 100);
  // hypercube = createCube4(hypercube, 150, 100);
  // hypercube = createCube4(hypercube, 150, -100);

  hypercube.forEach((line) => {
    const point0 = line[0];
    const point1 = line[1];
    drawLine(context, point0, point1);
  });
};
