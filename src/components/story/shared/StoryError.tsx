import React from "react";
import styles from "./StoryError.module.css";

interface StoryErrorProps {
  error: string;
  onRetry?: () => void;
}

const StoryError: React.FC<StoryErrorProps> = ({ error, onRetry }) => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{error}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default StoryError;
