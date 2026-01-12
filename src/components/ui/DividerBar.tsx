import type React from "react";
import styles from './DividerBar.module.css';

type DividerBarProps = {
  value: string;
};
export const DividerBar: React.FC<DividerBarProps> = ({ value }) => {
  return (
    <div className={styles['divider-bar-container']}>
      <div className={styles['divider-bar-div']}></div>
      <span
        className={styles['divider-bar-value']}
      >
        {value}
      </span>
      <div className="flex-1 h-px bg-gray-300"></div>
    </div>
  );
};
