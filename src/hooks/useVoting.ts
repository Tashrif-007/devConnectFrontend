import { useState } from "react";
import { useSubmitVoteMutation } from "../queries/stories/submitVote";
import type { UseVotingReturn, UserVoteType } from "../types";

export const useVoting = (
  storyId: string,
  initialUpvotes: number,
  initialDownvotes: number,
  isLoggedIn: boolean,
  initialUserVoteType?: UserVoteType
): UseVotingReturn => {
  const [error, setError] = useState<string | null>(null);
  const [localUpvotes, setLocalUpvotes] = useState(initialUpvotes);
  const [localDownvotes, setLocalDownvotes] = useState(initialDownvotes);
  const [userVoteType, setUserVoteType] = useState<UserVoteType>(
    initialUserVoteType || null
  );

  const handleVoteSuccess = (
    upvotes: number,
    downvotes: number,
    userVote: UserVoteType
  ) => {
    setLocalUpvotes(upvotes);
    setLocalDownvotes(downvotes);
    setUserVoteType(userVote);
  };

  const { submitVoteMutation, loading } = useSubmitVoteMutation(
    storyId,
    localUpvotes,
    localDownvotes,
    userVoteType,
    handleVoteSuccess
  );

  const handleUpvote = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!isLoggedIn) {
      setError("Please log in to vote");
      return;
    }

    submitVoteMutation("UPVOTE");
  };

  const handleDownvote = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!isLoggedIn) {
      setError("Please log in to vote");
      return;
    }

    submitVoteMutation("DOWNVOTE");
  };

  return {
    localUpvotes,
    localDownvotes,
    userVoteType,
    loading,
    error,
    handleUpvote,
    handleDownvote,
    clearError: () => setError(null),
  };
};
