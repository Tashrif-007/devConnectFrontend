import React from "react";
import PostCardSkeleton from "../../feed/PostCardSkeleton";
import styles from "./StoryDetailSkeleton.module.css";

const StoryDetailSkeleton: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["skeleton-title"]}></div>
      <PostCardSkeleton />
    </div>
  );
};

export default StoryDetailSkeleton;
