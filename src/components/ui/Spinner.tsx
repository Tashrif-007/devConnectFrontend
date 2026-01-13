import React from "react";
import styles from './Spinner.module.css';

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  fullScreen?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "border-blue-500",
  fullScreen = false,
}) => {
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-16 h-16 border-4",
  };

  const spinnerContent = (
    <div
      className={`${sizeClasses[size]} ${color} ${styles['spinner-content']}`}
    />
  );

  if (fullScreen) {
    return (
      <div className={styles['spinner-fullscreen']}>
        {spinnerContent}
      </div>
    );
  }

  return (
    <div className={styles['spinner']}>{spinnerContent}</div>
  );
};

export default Spinner;
