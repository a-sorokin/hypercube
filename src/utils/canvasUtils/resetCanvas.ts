import { useCanvasStore } from 'canvasStore';

export const resetCanvas = () => {
  const { context } = useCanvasStore.getState();
  if (!context) return;

  context.reset();
  context.strokeStyle = '#fff';
  context.lineWidth = 1;
};
