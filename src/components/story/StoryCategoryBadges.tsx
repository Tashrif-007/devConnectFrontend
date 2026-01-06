import React from "react";

interface StoryCategoryBadgesProps {
  categories: string[];
}

const StoryCategoryBadges: React.FC<StoryCategoryBadgesProps> = ({
  categories,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {categories.map((category, idx) => (
        <span
          key={idx}
          className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default StoryCategoryBadges;
