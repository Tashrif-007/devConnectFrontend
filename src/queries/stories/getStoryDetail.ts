import { useQuery } from "@tanstack/react-query";
import { storyService } from "../../services/storyService";
import { QUERY_CONFIG, UI_MESSAGES } from "../../constants";

export const useGetStoryDetail = (storyId: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_CONFIG.QUERY_KEYS.STORIES, storyId],
    queryFn: async () => {
      if (!storyId) throw new Error("Story ID not found");
      const response = await storyService.getStoryById(storyId);
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error(
        response.message || UI_MESSAGES.ERROR.FAILED_TO_FETCH_STORIES
      );
    },
    enabled: !!storyId,
    staleTime: QUERY_CONFIG.STALE_TIMES.STORIES,
    gcTime: QUERY_CONFIG.GC_TIMES.STORIES,
  });

  return {
    story: data || null,
    loading: isLoading,
    error: error?.message || null,
  };
};
