import { useCanvasStore } from 'canvasStore';
import { drawLine } from 'utils/canvasUtils/drawLine';
import { createCube } from 'utils/hypercubeUtils/createCube';
import { createSquare } from 'utils/hypercubeUtils/createSquare';

export const createHypercube = () => {
  const { context } = useCanvasStore.getState();
  if (!context) return;

  const square = createSquare({ x: 50, y: 650 });
  const cube = createCube(square, 50);

  cube.forEach((line) => {
    const point0 = line[0];
    const point1 = line[1];
    drawLine(context, point0, point1);
  });
};
