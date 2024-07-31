import { SQUARE_SIZE } from 'constants/cubeConstants';
import { Point, Square } from 'types/cubeTypes';

export const createSquare = ({ x, y }: Point): Square => {
  const sq = SQUARE_SIZE;
  return [
    [
      { x, y },
      { x: x + sq, y },
    ],
    [
      { x: x + sq, y },
      { x: x + sq, y: y - sq },
    ],
    [
      { x: x + sq, y: y - sq },
      { x, y: y - sq },
    ],
    [
      { x, y: y - sq },
      { x, y },
    ],
  ];
};
