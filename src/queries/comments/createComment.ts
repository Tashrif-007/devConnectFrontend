import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storyService } from "../../services/storyService";
import type { CreateCommentPayload, Comment } from "../../types";

export const useCreateCommentMutation = (storyId?: string) => {
  const queryClient = useQueryClient();

  const {
    mutateAsync: addCommentMutation,
    isPending: loading,
    error,
  } = useMutation({
    mutationFn: async (body: string): Promise<Comment> => {
      console.log(storyId)
      if (!storyId) throw new Error("Story ID is required");
      const payload: CreateCommentPayload = { body };
      const response = await storyService.createComment(storyId, payload);
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error(response.message || "Failed to add comment");
    },
    onSuccess: (newComment) => {
      queryClient.setQueryData(
        ["comments", storyId],
        (oldComments: Comment[] = []) => [...oldComments, newComment]
      );
    },
  });

  return {
    addComment: async (body: string): Promise<boolean> => {
      try {
        await addCommentMutation(body);
        return true;
      } catch {
        return false;
      }
    },
    loading,
    error: error?.message || null,
  };
};
