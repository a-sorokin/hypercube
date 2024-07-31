import { useCanvasStore } from 'canvasStore';

const initCanvas = (context: CanvasRenderingContext2D) => {
  context.strokeStyle = '#d6d6d6';
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
  context.moveTo(50, 50);
  context.lineTo(200, 200);

  context.stroke();
};
