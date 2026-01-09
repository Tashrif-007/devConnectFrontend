import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storyService } from "../../services/storyService";
import type { CreateStoryResponse, UpdateStoryPayload } from "../../types";

export const useUpdateStoryMutation = (storyId?: string) => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: updateStoryMutation,
    isPending: loading,
    error,
  } = useMutation<CreateStoryResponse, Error, UpdateStoryPayload>({
    mutationFn: async (payload: UpdateStoryPayload) => {
      const response = await storyService.updateStory(storyId!, payload);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      if (storyId) {
        queryClient.invalidateQueries({ queryKey: ["story", storyId] });
      }
    },
  });

  return {
    updateStory: async (
      payload: UpdateStoryPayload
    ): Promise<CreateStoryResponse> => {
      return await updateStoryMutation(payload);
    },
    loading,
    error: error?.message || null,
  };
};
