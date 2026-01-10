import React from "react";
import styles from "./PostCardSkeleton.module.css";

const PostCardSkeleton: React.FC = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"></div>

        <div className="flex-1">
          <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-16 mb-3"></div>

          <div className={styles.skeletonLine}></div>

          <div className="space-y-2 mb-3">
            <div className={styles.skeletonLine}></div>
            <div className={styles.skeletonLine}></div>
            <div className={`${styles.skeletonLine} w-4/5`}></div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <div className="h-6 bg-gray-300 rounded w-16"></div>
            <div className="h-6 bg-gray-300 rounded w-20"></div>
          </div>

          <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
            <div className="h-4 bg-gray-300 rounded w-12"></div>
            <div className="h-4 bg-gray-300 rounded w-12"></div>
            <div className="h-4 bg-gray-300 rounded w-12"></div>
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
