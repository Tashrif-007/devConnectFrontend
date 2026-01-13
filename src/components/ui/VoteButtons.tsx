import React from "react";
import { RxThickArrowDown, RxThickArrowUp } from "react-icons/rx";
import { useAuth } from "../../hooks/useAuth";
import { useVoting } from "../../hooks/useVoting";
import Button from "./Button";
import styles from "./VoteButtons.module.css";
import Snackbar from "./Snackbar";

interface VoteButtonsProps {
  storyId: string;
  upvotes: number;
  downvotes: number;
  userVote?: "UPVOTE" | "DOWNVOTE" | null;
}

export const VoteButtons: React.FC<VoteButtonsProps> = ({
  storyId,
  upvotes,
  downvotes,
  userVote,
}) => {
  const { user } = useAuth();
  const {
    localUpvotes,
    localDownvotes,
    userVoteType,
    loading,
    error,
    handleUpvote,
    handleDownvote,
    clearError,
  } = useVoting(storyId, upvotes, downvotes, !!user, userVote);
  return (
    <>
      <div className={styles["vote-button-container"]}>
        <Button
          onClick={handleUpvote}
          disabled={loading}
          className={`${styles["vote-button"]} ${
            userVoteType === "UPVOTE"
              ? styles["upvote-button-active"]
              : styles["upvote-button-inactive"]
          }`}
        >
          {userVoteType === "UPVOTE" ? (
            <RxThickArrowUp size={14} fill="currentColor" />
          ) : (
            <RxThickArrowUp size={14} />
          )}
          <span className={styles["vote-count"]}>{localUpvotes}</span>
        </Button>

        <Button
          onClick={handleDownvote}
          disabled={loading}
          className={`${styles["vote-button"]} ${
            userVoteType === "DOWNVOTE"
              ? styles["downvote-button-active"]
              : styles["downvote-button-inactive"]
          }`}
        >
          {userVoteType === "DOWNVOTE" ? (
            <RxThickArrowDown size={14} fill="currentColor" />
          ) : (
            <RxThickArrowDown size={14} />
          )}
          <span className={styles["vote-count"]}>{localDownvotes}</span>
        </Button>
      </div>
      <Snackbar message={error} onClose={clearError} />
    </>
  );
};

export default VoteButtons;
