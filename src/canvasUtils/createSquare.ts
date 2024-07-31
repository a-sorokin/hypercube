import { drawLine } from 'canvasUtils/drawLine';
import { SQUARE_SIZE } from 'constants/cubeConstants';
import { Point, Square } from 'types/cubeTypes';

export const createSquare = (context: CanvasRenderingContext2D, { x, y }: Point) => {
  const square: Square = [
    [
      { x, y },
      { x: x + SQUARE_SIZE, y },
    ],
    [
      { x, y },
      { x, y: y - SQUARE_SIZE },
    ],
    [
      { x, y: y - SQUARE_SIZE },
      { x: x + SQUARE_SIZE, y: y - SQUARE_SIZE },
    ],
    [
      { x: x + SQUARE_SIZE, y: y - SQUARE_SIZE },
      { x: x + SQUARE_SIZE, y },
    ],
  ];

  square.forEach((line) => {
    const point0 = line[0];
    const point1 = line[1];
    drawLine(context, point0, point1);
  });
};
