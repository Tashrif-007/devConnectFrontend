import React from "react";
import { FiMessageCircle, FiShare2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import VoteButtons from "../common/VoteButtons";
import { Button } from "../common";

interface PostCardActionsProps {
  storyId: string;
  upvotes: number;
  downvotes: number;
  userVote?: "UPVOTE" | "DOWNVOTE" | null;
  commentsCount: number;
  onCardClick?: () => void;
}

const PostCardActions: React.FC<PostCardActionsProps> = ({
  storyId,
  upvotes,
  downvotes,
  userVote = null,
  commentsCount,
  onCardClick,
}) => {
  const navigate = useNavigate();

  const handleCommentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/stories/${storyId}`);
    onCardClick?.();
  };

  return (
    <div className="flex items-center justify-end gap-4 text-sm">
      <div className="flex gap-3">
        <VoteButtons
          storyId={storyId}
          upvotes={upvotes}
          downvotes={downvotes}
          userVote={userVote}
        />
        <div>
          <Button
            onClick={handleCommentClick}
            className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors"
          >
            <FiMessageCircle size={16} />
            <span>{commentsCount}</span>
          </Button>
        </div>
      </div>
      <div>
        <Button className="flex items-center gap-1 text-gray-500 hover:text-green-500 transition-colors">
          <FiShare2 size={16} />
        </Button>
      </div>
    </div>
  );
};

export default PostCardActions;
