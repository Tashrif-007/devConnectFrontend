import React from "react";
import { useNavigate } from "react-router-dom";
import type { Story } from "../../types";
import { formatDate, truncateText } from "../../utils/stringUtils";
import StoryCategoryBadges from "./StoryCategoryBadges";

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/stories/${story.storyId}`)}
      className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer hover:border-gray-300"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-gray-900 flex-1 pr-4">
          {story.title}
        </h3>
        <span className="text-xs text-gray-500 whitespace-nowrap">
          {formatDate(story.createdAt)}
        </span>
      </div>

      {story.categoryNames && story.categoryNames.length > 0 && (
        <StoryCategoryBadges categories={story.categoryNames} />
      )}

      <p className="text-gray-700 text-sm leading-relaxed">
        {truncateText(story.summary || story.body, 300)}
      </p>

      <div className="mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/story/${story.storyId}`);
          }}
          className="inline-block text-gray-900 font-medium text-sm hover:underline"
        >
          Read More →
        </button>
      </div>
    </div>
  );
};

export default StoryCard;
