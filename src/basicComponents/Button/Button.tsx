import styles from './Button.module.scss';
import { FC, MouseEvent, ReactElement } from 'react';
import clsx from 'clsx';

type TProps = {
  children: ReactElement | string;

  active?: boolean;
  className?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const Button: FC<TProps> = ({ children, onClick, className }) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      <span className={styles.text}>{children}</span>
    </button>
  );
};
