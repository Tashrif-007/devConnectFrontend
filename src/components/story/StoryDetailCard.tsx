import React from "react";
import StoryDetailContent from "./StoryDetailContent";
import StoryDetailActions from "./StoryDetailActions";
import type { Story } from "../../types";

interface StoryDetailCardProps {
  story: Story;
  onShare?: () => void;
}

const StoryDetailCard: React.FC<StoryDetailCardProps> = ({
  story,
  onShare,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
      <div className="p-8">
        <StoryDetailContent story={story} />
        <StoryDetailActions story={story} onShare={onShare} />
      </div>
    </div>
  );
};

export default StoryDetailCard;
