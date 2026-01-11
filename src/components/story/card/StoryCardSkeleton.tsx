import React from "react";
import styles from "./StoryCardSkeleton.module.css";

interface StoryCardSkeletonProps {
  count?: number;
}

const StoryCardSkeleton: React.FC<StoryCardSkeletonProps> = ({ count = 3 }) => {
  return (
    <div className={styles["container"]}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles["skeleton-card"]}>
          <div className={styles["skeleton-title"]}></div>
          <div className={styles["skeleton-text"]}></div>
          <div className={styles["skeleton-text-short"]}></div>
        </div>
      ))}
    </div>
  );
};

export default StoryCardSkeleton;
