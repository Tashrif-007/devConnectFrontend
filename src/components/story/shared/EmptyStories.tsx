import React from "react";
import styles from "./EmptyStories.module.css";

const EmptyStories: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textCenter}>
        <p className={styles.mainText}>No stories posted yet</p>
        <p className={styles.secondaryText}>
          Start sharing your thoughts with the community!
        </p>
      </div>
    </div>
  );
};

export default EmptyStories;
