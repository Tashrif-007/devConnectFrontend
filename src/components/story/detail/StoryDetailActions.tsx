import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiMessageCircle, FiShare2 } from "react-icons/fi";
import VoteButtons from "../../ui/VoteButtons";
import Snackbar from "../../ui/Snackbar";
import type { Story } from "../../../types";
import { Button } from "../../ui";
import styles from "./StoryDetailActions.module.css";

interface StoryDetailActionsProps {
  story: Story;
}

const StoryDetailActions: React.FC<StoryDetailActionsProps> = ({ story }) => {
  const location = useLocation();
  const [shareMessage, setShareMessage] = useState<string | null>(null);

  useEffect(() => {
    if (shareMessage) {
      const timer = setTimeout(() => {
        setShareMessage(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [shareMessage]);

  const handleShare = () => {
    const url = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;
    navigator.clipboard.writeText(url);
    setShareMessage("Story link copied to clipboard!");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.actionsGroup}>
          <VoteButtons
            storyId={story.storyId}
            upvotes={story.votes.upvotes}
            downvotes={story.votes.downvotes}
            userVote={story.votes.userVote}
          />
          <button className={styles.commentButton}>
            <div className={styles.commentIconContainer}>
              <FiMessageCircle size={18} />
            </div>
            <span className={styles.commentText}>Comments</span>
          </button>
        </div>
        <Button onClick={handleShare} className={styles.shareButton}>
          <FiShare2 size={18} /> Share
        </Button>
      </div>
      <Snackbar message={shareMessage} onClose={() => setShareMessage(null)} />
    </>
  );
};

export default StoryDetailActions;
