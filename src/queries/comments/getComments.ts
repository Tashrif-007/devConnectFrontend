import { useQuery } from "@tanstack/react-query";
import { storyService } from "../../services/storyService";
import type { Comment } from "../../types";

export const useGetComments = (storyId?: string) => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["comments", storyId],
    queryFn: async () => {
      if (!storyId) return [];
      const response = await storyService.getCommentsByStoryId(storyId);
      if (response.success && response.data?.data) {
        return response.data.data;
      }
      throw new Error(response.message || "Failed to fetch comments");
    },
    staleTime: 1 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    enabled: !!storyId,
  });

  return {
    comments: data as Comment[],
    loading: isLoading,
    error: error?.message || null,
  };
};
