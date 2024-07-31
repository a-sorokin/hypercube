import styles from './Layout.module.scss';
import { Canvas } from 'components/Canvas/Canvas';
import { Controls } from 'components/Controls/Controls';

export const Layout = () => {
  return (
    <main className={styles.layout}>
      <Canvas />
      <Controls />
    </main>
  );
};
