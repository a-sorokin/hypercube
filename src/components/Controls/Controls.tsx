import styles from './Controls.module.scss';
import { Button } from 'basicComponents/Button/Button';

export const Controls = () => {
  return (
    <div className={styles.controls}>
      <Button onClick={() => {}}>Add dimension</Button>
    </div>
  );
};
