import React from "react";
import { useLocation } from "react-router-dom";
import { FiMessageCircle, FiShare2 } from "react-icons/fi";
import VoteButtons from "../common/VoteButtons";
import type { Story } from "../../types";

interface StoryDetailActionsProps {
  story: Story;
  onShare?: () => void;
}

const StoryDetailActions: React.FC<StoryDetailActionsProps> = ({
  story,
  onShare,
}) => {
  const location = useLocation();

  const handleShare = () => {
    if (onShare) {
      onShare();
    } else {
      const url = `${window.location.origin}${location.pathname}`;
      navigator.clipboard.writeText(url);
      alert("Story link copied to clipboard!");
    }
  };

  return (
    <div className="border-t border-gray-200 pt-6 flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-6">
        <VoteButtons
          storyId={story.storyId}
          upvotes={story.votes.upvotes}
          downvotes={story.votes.downvotes}
          userVote={story.votes.userVote}
        />
        <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors group">
          <div className="p-2 rounded-lg group-hover:bg-blue-50">
            <FiMessageCircle size={18} />
          </div>
          <span className="text-sm font-medium">Comments</span>
        </button>
      </div>
      <button
        onClick={handleShare}
        className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors group"
      >
        <div className="p-2 rounded-lg group-hover:bg-green-50">
          <FiShare2 size={18} />
        </div>
        <span className="text-sm font-medium">Share</span>
      </button>
    </div>
  );
};

export default StoryDetailActions;
