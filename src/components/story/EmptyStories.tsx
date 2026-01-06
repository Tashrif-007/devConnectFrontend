import React from "react";

const EmptyStories: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md p-12">
      <div className="text-center">
        <p className="text-gray-600 text-lg">No stories posted yet</p>
        <p className="text-gray-400 text-sm mt-2">
          Start sharing your thoughts with the community!
        </p>
      </div>
    </div>
  );
};

export default EmptyStories;
