import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storyService } from "../../services/storyService";

export const useDeleteStoryMutation = () => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: deleteStoryMutation,
    isPending: loading,
    error,
  } = useMutation({
    mutationFn: async (storyId: string) => {
      const response = await storyService.deleteStory(storyId);
      return response;
    },
    onSuccess: (_, storyId) => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      queryClient.removeQueries({ queryKey: ["story", storyId] });
    },
  });

  return {
    deleteStory: async (storyId: string): Promise<void> => {
      await deleteStoryMutation(storyId);
    },
    loading,
    error: error?.message || null,
  };
};
