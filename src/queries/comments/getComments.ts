import { useQuery } from "@tanstack/react-query";
import { storyService } from "../../services/storyService";
import { QUERY_CONFIG } from "../../constants";
import type { Comment } from "../../interfaces";

export const useGetComments = (storyId?: string) => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: [QUERY_CONFIG.QUERY_KEYS.COMMENTS, storyId],
    queryFn: async () => {
      if (!storyId) return [];
      const response = await storyService.getCommentsByStoryId(storyId);
      if (response.success && response.data?.data) {
        return response.data.data;
      }
      throw new Error(response.message || "Failed to fetch comments");
    },
    staleTime: QUERY_CONFIG.STALE_TIMES.COMMENTS,
    gcTime: QUERY_CONFIG.GC_TIMES.COMMENTS,
    enabled: !!storyId,
  });

  return {
    comments: data as Comment[],
    loading: isLoading,
    error: error?.message || null,
  };
};
