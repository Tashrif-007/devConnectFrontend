import React from "react";

interface StoryCardSkeletonProps {
  count?: number;
}

const StoryCardSkeleton: React.FC<StoryCardSkeletonProps> = ({ count = 3 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 animate-pulse"
        >
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      ))}
    </div>
  );
};

export default StoryCardSkeleton;
