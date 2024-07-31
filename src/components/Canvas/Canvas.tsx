import styles from './Canvas.module.scss';
import { useEffect, useRef } from 'react';
import { useCanvasStore } from 'canvasStore';
import { drawElements } from 'utils/canvasUtils/drawElements';
import { initCanvas } from 'utils/canvasUtils/initCanvas';
import { createHypercube } from 'utils/hypercubeUtils/createHypercube';

const CANVAS_SIZE = 700;

export const Canvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const setCanvas = useCanvasStore((state) => state.setCanvas);
  const setContext = useCanvasStore((state) => state.setContext);

  useEffect(() => {
    if (ref && ref.current) setCanvas(ref.current);
    initCanvas();
    createHypercube();
    drawElements();

    return () => {
      setCanvas(undefined);
      setContext(undefined);
    };
  }, [setCanvas, setContext]);

  return <canvas className={styles.canvas} ref={ref} width={CANVAS_SIZE} height={CANVAS_SIZE} />;
};
