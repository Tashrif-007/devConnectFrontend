import React from "react";
import PostCardSkeleton from "../../feed/PostCardSkeleton";
import styles from './StoryDetailSkeleton.module.css';

const StoryDetailSkeleton: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="h-8 bg-gray-200 rounded w-1/4 animate-pulse"></div>
      <PostCardSkeleton />
    </div>
  );
};

export default StoryDetailSkeleton;
