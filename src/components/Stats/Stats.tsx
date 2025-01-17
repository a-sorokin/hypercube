import styles from './Stats.module.scss';
import { useCanvasStore } from 'canvasStore';

export const Stats = () => {
  const stats = useCanvasStore((state) => state.stats);

  return (
    <div className={styles.stats}>
      <span>Edges: {stats}</span>
    </div>
  );
};
