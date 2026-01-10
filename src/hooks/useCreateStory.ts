import { useCreateStoryMutation } from "../queries/stories/createStory";
import { useUpdateStoryMutation } from "../queries/stories/updateStory";
import { useDeleteStoryMutation } from "../queries/stories/deleteStory";
import type { CreateStoryResponse } from "../types";
import type { UpdateStoryPayload } from "../types/story";
import type { CreateStoryPayload } from "../interfaces";

export const useCreateStory = (storyId?: string) => {
  const {
    createStory: createStoryFn,
    loading: createLoading,
    error: createError,
  } = useCreateStoryMutation();
  const {
    updateStory: updateStoryFn,
    loading: updateLoading,
    error: updateError,
  } = useUpdateStoryMutation(storyId);
  const {
    deleteStory: deleteStoryFn,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteStoryMutation();

  return {
    createStory: async (
      payload: CreateStoryPayload
    ): Promise<CreateStoryResponse> => {
      return await createStoryFn(payload);
    },
    updateStory: async (
      payload: UpdateStoryPayload
    ): Promise<CreateStoryResponse> => {
      return await updateStoryFn(payload);
    },
    deleteStory: async (storyId: string): Promise<void> => {
      return await deleteStoryFn(storyId);
    },
    loading: createLoading || updateLoading || deleteLoading,
    error: createError || updateError || deleteError || null,
  };
};
