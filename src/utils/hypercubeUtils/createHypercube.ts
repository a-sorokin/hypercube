import { useCanvasStore } from 'canvasStore';
import { Dimensions } from 'types/cubeTypes';
import { drawLine } from 'utils/canvasUtils/drawLine';
import { createCube4 } from 'utils/hypercubeUtils/createCube4';
import { createSquare } from 'utils/hypercubeUtils/createSquare';

export const createHypercube = (dimensions: Dimensions) => {
  const { context } = useCanvasStore.getState();
  if (!context) return;

  const defaultSquare = createSquare({ x: 50, y: 650 });

  const hypercube = dimensions.reduce((acc, { x, y }) => {
    return createCube4(acc, x, y);
  }, defaultSquare);

  hypercube.forEach((line) => {
    const point0 = line[0];
    const point1 = line[1];
    drawLine(context, point0, point1);
  });
};
