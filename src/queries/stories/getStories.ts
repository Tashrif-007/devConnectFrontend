import { useQuery } from "@tanstack/react-query";
import { storyService } from "../../services/storyService";

export const useGetStories = (
  currentPage: number,
  currentCategory?: string
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["stories", { page: currentPage, category: currentCategory }],
    queryFn: async () => {
      const response = await storyService.fetchStories(
        currentPage,
        5, // itemsPerPage
        currentCategory
      );
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error(response.message || "Failed to fetch stories");
    },
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
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
