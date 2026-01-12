import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCommentMutation = (storyId?: string) => {
  const queryClient = useQueryClient();

  const {
    mutateAsync: deleteCommentMutation,
    isPending: loading,
    error,
  } = useMutation({
    mutationFn: async (commentId: string) => {
      // remains
      return commentId;
    },
    onSuccess: (commentId) => {
      queryClient.setQueryData(
        ["comments", storyId],
        (oldComments: any[] = []) =>
          oldComments.filter((comment) => comment.commentId !== commentId)
      );
    },
  });

  return {
    deleteComment: async (commentId: string): Promise<void> => {
      await deleteCommentMutation(commentId);
    },
    loading,
    error: error?.message || null,
  };
};
