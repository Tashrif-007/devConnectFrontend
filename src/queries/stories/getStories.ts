import { useQuery } from "@tanstack/react-query";
import { storyService } from "../../services/storyService";
import { QUERY_CONFIG, UI_MESSAGES } from "../../constants";

export const useGetStories = (
  currentPage: number,
  currentCategory?: string
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [
      QUERY_CONFIG.QUERY_KEYS.STORIES,
      { page: currentPage, category: currentCategory },
    ],
    queryFn: async () => {
      const response = await storyService.fetchStories(
        currentPage,
        QUERY_CONFIG.PAGINATION.ITEMS_PER_PAGE,
        currentCategory
      );
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error(
        response.message || UI_MESSAGES.ERROR.FAILED_TO_FETCH_STORIES
      );
    },
    staleTime: QUERY_CONFIG.STALE_TIMES.STORIES,
    gcTime: QUERY_CONFIG.GC_TIMES.STORIES,
  });

  const stories = data?.data || [];
  const pagination = data?.pagination || null;

  return {
    stories,
    pagination,
    loading: isLoading,
    error: error?.message || null,
  };
};
