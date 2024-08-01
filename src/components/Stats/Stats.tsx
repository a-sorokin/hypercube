import styles from './Stats.module.scss';
import { useCanvasStore } from 'canvasStore';

export const Stats = () => {
  const dimensions = useCanvasStore((state) => state.dimensions);

  return (
    <div className={styles.stats}>
      <span>{dimensions.length}</span>
    </div>
  );
};
