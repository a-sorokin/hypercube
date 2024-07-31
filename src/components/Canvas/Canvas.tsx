import styles from './Canvas.module.scss';
import { useEffect, useRef } from 'react';
import { useCanvasStore } from 'canvasStore';
import { createHypercube } from 'canvasUtils/createHypercube';

const CANVAS_SIZE = 700;

export const Canvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const setCanvas = useCanvasStore((state) => state.setCanvas);

  useEffect(() => {
    if (ref && ref.current) setCanvas(ref.current);
    createHypercube();

    return () => setCanvas(undefined);
  }, [setCanvas]);

  return <canvas className={styles.canvas} ref={ref} width={CANVAS_SIZE} height={CANVAS_SIZE} />;
};
