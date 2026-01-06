import { useState } from "react";
import { voteService } from "../services/voteService";
import type { UseVotingReturn, UserVoteType } from "../types";

export const useVoting = (
  storyId: string,
  initialUpvotes: number,
  initialDownvotes: number,
  isLoggedIn: boolean,
  initialUserVoteType?: UserVoteType
): UseVotingReturn => {
  const [localUpvotes, setLocalUpvotes] = useState(initialUpvotes);
  const [localDownvotes, setLocalDownvotes] = useState(initialDownvotes);
  const [userVoteType, setUserVoteType] = useState<UserVoteType>(
    initialUserVoteType || null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpvote = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!isLoggedIn) {
      setError("Please log in to vote");
      return;
    }

    setError(null);
    setLoading(true);

    const previousUpvotes = localUpvotes;
    const previousDownvotes = localDownvotes;
    const previousVoteType = userVoteType;

    let newUpvotes = localUpvotes;
    let newDownvotes = localDownvotes;
    let newVoteType: UserVoteType = "UPVOTE";

    if (userVoteType === "UPVOTE") {
      newUpvotes = localUpvotes - 1;
      newVoteType = null;
    } else if (userVoteType === "DOWNVOTE") {
      newUpvotes = localUpvotes + 1;
      newDownvotes = localDownvotes - 1;
      newVoteType = "UPVOTE";
    } else {
      newUpvotes = localUpvotes + 1;
      newVoteType = "UPVOTE";
    }

    setLocalUpvotes(newUpvotes);
    setLocalDownvotes(newDownvotes);
    setUserVoteType(newVoteType);

    try {
      const response = await voteService.submitVote(storyId, {
        voteType: "UPVOTE",
      });

      if (!response.success || !response.data) {
        setLocalUpvotes(previousUpvotes);
        setLocalDownvotes(previousDownvotes);
        setUserVoteType(previousVoteType);
        setError(response.message || "Failed to upvote");
      } else {
        setLocalUpvotes(response.data.upvotes);
        setLocalDownvotes(response.data.downvotes);
        setUserVoteType(response.data.userVote || null);
      }
    } catch (err) {
      setLocalUpvotes(previousUpvotes);
      setLocalDownvotes(previousDownvotes);
      setUserVoteType(previousVoteType);
      setError(err instanceof Error ? err.message : "Failed to upvote");
    } finally {
      setLoading(false);
    }
  };

  const handleDownvote = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!isLoggedIn) {
      setError("Please log in to vote");
      return;
    }

    setError(null);
    setLoading(true);

    const previousUpvotes = localUpvotes;
    const previousDownvotes = localDownvotes;
    const previousVoteType = userVoteType;

    let newUpvotes = localUpvotes;
    let newDownvotes = localDownvotes;
    let newVoteType: UserVoteType = "DOWNVOTE";

    if (userVoteType === "DOWNVOTE") {
      newDownvotes = localDownvotes - 1;
      newVoteType = null;
    } else if (userVoteType === "UPVOTE") {
      newDownvotes = localDownvotes + 1;
      newUpvotes = localUpvotes - 1;
      newVoteType = "DOWNVOTE";
    } else {
      newDownvotes = localDownvotes + 1;
      newVoteType = "DOWNVOTE";
    }

    setLocalUpvotes(newUpvotes);
    setLocalDownvotes(newDownvotes);
    setUserVoteType(newVoteType);

    try {
      const response = await voteService.submitVote(storyId, {
        voteType: "DOWNVOTE",
      });

      if (!response.success || !response.data) {
        setLocalUpvotes(previousUpvotes);
        setLocalDownvotes(previousDownvotes);
        setUserVoteType(previousVoteType);
        setError(response.message || "Failed to downvote");
      } else {
        setLocalUpvotes(response.data.upvotes);
        setLocalDownvotes(response.data.downvotes);
        setUserVoteType(response.data.userVote || null);
      }
    } catch (err) {
      setLocalUpvotes(previousUpvotes);
      setLocalDownvotes(previousDownvotes);
      setUserVoteType(previousVoteType);
      setError(err instanceof Error ? err.message : "Failed to downvote");
    } finally {
      setLoading(false);
    }
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
