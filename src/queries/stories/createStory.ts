import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storyService } from "../../services/storyService";
import type { CreateStoryResponse } from "../../types";
import type { CreateStoryPayload } from "../../interfaces";

export const useCreateStoryMutation = () => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: createStoryMutation,
    isPending: loading,
    error,
  } = useMutation<CreateStoryResponse, Error, CreateStoryPayload>({
    mutationFn: async (payload: CreateStoryPayload) => {
      const response = await storyService.createStory(payload);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  return {
    createStory: async (
      payload: CreateStoryPayload
    ): Promise<CreateStoryResponse> => {
      return await createStoryMutation(payload);
    },
    loading,
    error: error?.message || null,
  };
};
