import { useCanvasStore } from 'canvasStore';
import { createSquare } from 'canvasUtils/createSquare';

const initCanvas = (context: CanvasRenderingContext2D) => {
  context.strokeStyle = '#fff';
  context.lineWidth = 1;
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
};

export const createHypercube = () => {
  const { canvas, setContext } = useCanvasStore.getState();
  if (!canvas) return;

  const context = canvas.getContext('2d');
  if (!context) return;
  setContext(context || undefined);
  initCanvas(context);
  context.beginPath();

  createSquare(context, { x: 20, y: 650 });

  context.stroke();
};
