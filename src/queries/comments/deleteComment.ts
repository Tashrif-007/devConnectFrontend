import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storyService } from "../../services/storyService";

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();

  const {
    mutateAsync: deleteCommentMutation,
    isPending: loading,
    error,
  } = useMutation({
    mutationFn: async (commentId: string) => {
      const response = await storyService.deleteComment(commentId);
      return response;
    },
    onSuccess: (commentId) => {
      queryClient.invalidateQueries({queryKey: ['comments']})
      queryClient.refetchQueries({queryKey: ['comment', commentId]})
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
