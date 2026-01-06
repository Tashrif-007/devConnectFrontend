import { useMutation } from "@tanstack/react-query";
import type { CreateStoryPayload, CreateStoryResponse } from "../types";
import { storyService } from "../services/storyService";

export const useCreateStory = () => {
  const {
    mutate: createStory,
    isPending: loading,
    error,
  } = useMutation<CreateStoryResponse, Error, CreateStoryPayload>({
    mutationFn: async (payload: CreateStoryPayload) => {
      const response = await storyService.createStory(payload);
      return response;
    },
  });

  return {
    createStory: async (
      payload: CreateStoryPayload
    ): Promise<CreateStoryResponse> => {
      return new Promise((resolve, reject) => {
        createStory(payload, {
          onSuccess: (response) => resolve(response),
          onError: (error) => reject(error),
        });
      });
    },
    loading,
    error: error?.message || null,
  };
};
