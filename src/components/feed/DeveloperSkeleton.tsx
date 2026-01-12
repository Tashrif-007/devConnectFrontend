import React from "react";
import styles from "./DeveloperSkeleton.module.css";

const DeveloperSkeleton: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skeletonAvatar}></div>
      <div className={styles.content}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonSubtitle}></div>
      </div>
    </div>
  );
};

export default DeveloperSkeleton;
