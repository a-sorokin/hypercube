import { useCanvasStore } from 'canvasStore';
import { createSquare } from 'canvasUtils/createSquare';

export const createHypercube = () => {
  const { context } = useCanvasStore.getState();
  if (!context) return;

  createSquare(context, { x: 20, y: 650 });
};
