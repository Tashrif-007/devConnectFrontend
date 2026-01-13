import React from "react";
import { FiMessageCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import VoteButtons from "../ui/VoteButtons";
import { Button } from "../ui";
import styles from "./PostCardActions.module.css";

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
    <div className={styles.container}>
      <div className={styles.actionsGroup}>
        <VoteButtons
          storyId={storyId}
          upvotes={upvotes}
          downvotes={downvotes}
          userVote={userVote}
        />
        <div>
          <Button onClick={handleCommentClick} className={styles.commentButton}>
            <FiMessageCircle size={16} />
            <span>{commentsCount}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCardActions;
