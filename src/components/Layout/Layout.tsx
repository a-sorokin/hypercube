import styles from './Layout.module.scss';
import { Canvas } from 'components/Canvas/Canvas';

export const Layout = () => {
  return (
    <main className={styles.layout}>
      <Canvas />
    </main>
  );
};
