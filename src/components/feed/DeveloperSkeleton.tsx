import React from "react";

const DeveloperSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse flex items-center gap-3 pb-4">
      <div className="w-10 h-10 rounded-full bg-gray-200"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-32"></div>
      </div>
    </div>
  );
};

export default DeveloperSkeleton;
