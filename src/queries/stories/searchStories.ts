import { useQuery } from "@tanstack/react-query";
import { storyService } from "../../services/storyService";

interface UseSearchStoriesParams {
  searchQuery: string;
  page?: number;
  itemsPerPage?: number;
  category?: string;
  enabled?: boolean;
}

export const useSearchStories = ({
  searchQuery,
  page = 1,
  itemsPerPage = 10,
  category,
  enabled = true,
}: UseSearchStoriesParams) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [
      "searchStories",
      { search: searchQuery, page, itemsPerPage, category },
    ],
    queryFn: async () => {
      const response = await storyService.fetchStories(
        page,
        itemsPerPage,
        category,
        searchQuery
      );
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error(response.message || "Failed to search stories");
    },
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
    enabled: enabled,
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
