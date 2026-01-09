import React from "react";
import { RxThickArrowDown, RxThickArrowUp } from "react-icons/rx";
import { useAuth } from "../../hooks/useAuth";
import { useVoting } from "../../hooks/useVoting";
import Snackbar from "./Snackbar";
import Button from "./Button";

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
      <div className="flex items-center gap-2">
        <Button
          onClick={handleUpvote}
          disabled={loading}
          className={`flex items-center gap-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
            userVoteType === "UPVOTE"
              ? "text-green-500 hover:text-green-600"
              : "text-gray-500 hover:text-green-500"
          }`}
        >
          {userVoteType === "UPVOTE" ? (
            <RxThickArrowUp size={14} fill="currentColor" />
          ) : (
            <RxThickArrowUp size={14} />
          )}
          <span className="text-xs">{localUpvotes}</span>
        </Button>

        <Button
          onClick={handleDownvote}
          disabled={loading}
          className={`flex items-center gap-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
            userVoteType === "DOWNVOTE"
              ? "text-red-500 hover:text-red-600"
              : "text-gray-500 hover:text-red-500"
          }`}
        >
          {userVoteType === "DOWNVOTE" ? (
            <RxThickArrowDown size={14} fill="currentColor" />
          ) : (
            <RxThickArrowDown size={14} />
          )}
          <span className="text-xs">{localDownvotes}</span>
        </Button>
      </div>
      <Snackbar message={error} onClose={clearError} />
    </>
  );
};

export default VoteButtons;
