import { useMutation, useQueryClient } from "@tanstack/react-query";
import { voteService } from "../../services/voteService";
import type { UserVoteType } from "../../types";
import type { Story } from "../../interfaces";

export const useSubmitVoteMutation = (
  storyId: string,
  localUpvotes: number,
  localDownvotes: number,
  userVoteType: UserVoteType,
  onVoteSuccess?: (
    upvotes: number,
    downvotes: number,
    userVote: UserVoteType
  ) => void
) => {
  const queryClient = useQueryClient();

  const { mutate: submitVoteMutation, isPending: loading } = useMutation({
    mutationFn: async (voteType: "UPVOTE" | "DOWNVOTE") => {
      const response = await voteService.submitVote(storyId, { voteType });
      if (!response.success || !response.data) {
        throw new Error(response.message || "Failed to vote");
      }
      return response.data;
    },
    onMutate: async (voteType: "UPVOTE" | "DOWNVOTE") => {
      await queryClient.cancelQueries({ queryKey: ["story", storyId] });
      const previousData = queryClient.getQueryData(["story", storyId]);
      let newUpvotes = localUpvotes;
      let newDownvotes = localDownvotes;
      let newUserVoteType: UserVoteType = voteType;

      if (voteType === "UPVOTE") {
        if (userVoteType === "UPVOTE") {
          newUpvotes = localUpvotes - 1;
          newUserVoteType = null;
        } else if (userVoteType === "DOWNVOTE") {
          newUpvotes = localUpvotes + 1;
          newDownvotes = localDownvotes - 1;
          newUserVoteType = "UPVOTE";
        } else {
          newUpvotes = localUpvotes + 1;
          newUserVoteType = "UPVOTE";
        }
      } else if (voteType === "DOWNVOTE") {
        if (userVoteType === "DOWNVOTE") {
          newDownvotes = localDownvotes - 1;
          newUserVoteType = null;
        } else if (userVoteType === "UPVOTE") {
          newDownvotes = localDownvotes + 1;
          newUpvotes = localUpvotes - 1;
          newUserVoteType = "DOWNVOTE";
        } else {
          newDownvotes = localDownvotes + 1;
          newUserVoteType = "DOWNVOTE";
        }
      }

      if (previousData) {
        queryClient.setQueryData(["story", storyId], (old: Story) => ({
          ...old,
          upvotes: newUpvotes,
          downvotes: newDownvotes,
          userVote: newUserVoteType,
        }));
      }

      return { previousData };
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["story", storyId], (old: Story) => ({
        ...old,
        upvotes: data.upvotes,
        downvotes: data.downvotes,
        userVote: data.userVote,
      }));
      queryClient.invalidateQueries({
        queryKey: ["stories"],
      });
      // Call the callback to update local state in the hook
      onVoteSuccess?.(data.upvotes, data.downvotes, data.userVote!);
    },
    onError: (_err, _variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["story", storyId], context.previousData);
      }
    },
  });

  return {
    submitVoteMutation,
    loading,
  };
};
