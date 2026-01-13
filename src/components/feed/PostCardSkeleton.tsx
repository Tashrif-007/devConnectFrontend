import React from "react";
import styles from "./PostCardSkeleton.module.css";

const PostCardSkeleton: React.FC = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.headerContainer}>
        <div className={styles.skeletonAvatarLarge}></div>

        <div className={styles.content}>
          <div className={styles.skeletonName}></div>
          <div className={styles.skeletonTime}></div>

          <div className={styles.skeletonLine}></div>

          <div className={styles.contentLines}>
            <div className={styles.skeletonLine}></div>
            <div className={styles.skeletonLine}></div>
            <div className={`${styles.skeletonLine} ${styles.shortLine}`}></div>
          </div>

          <div className={styles.tagsContainer}>
            <div className={styles.skeletonTag}></div>
            <div className={styles.skeletonTagLarge}></div>
          </div>

          <div className={styles.actions}>
            <div className={styles.skeletonAction}></div>
            <div className={styles.skeletonAction}></div>
            <div className={styles.skeletonAction}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PostCardSkeletonLoader: React.FC = () => {
  return (
    <div>
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
    </div>
  );
};

export default PostCardSkeleton;
