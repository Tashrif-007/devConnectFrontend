import { useQueryClient } from "@tanstack/react-query";
import { useGetComments } from "../queries/comments/getComments";
import { useCreateCommentMutation } from "../queries/comments/createComment";
import type { UseCommentsReturn } from "../types";

export const useComments = (storyId?: string): UseCommentsReturn => {
  const queryClient = useQueryClient();
  const { comments, loading, error } = useGetComments(storyId);
  const { addComment } = useCreateCommentMutation(storyId);

  return {
    comments,
    loading,
    error,
    addComment: async (_, body: string): Promise<boolean> => {
      return await addComment(body);
    },
    fetchComments: () =>
      queryClient.invalidateQueries({ queryKey: ["comments", storyId] }),
  };
};
