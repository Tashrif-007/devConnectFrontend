import { useQuery } from "@tanstack/react-query";
import { storyService } from "../../services/storyService";

export const useGetStoryDetail = (storyId: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["story", storyId],
    queryFn: async () => {
      if (!storyId) throw new Error("Story ID not found");
      const response = await storyService.getStoryById(storyId);
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error(response.message || "Failed to fetch story");
    },
    enabled: !!storyId,
    staleTime: 2 * 60 * 1000, 
    gcTime: 5 * 60 * 1000, 
  });

  return {
    story: data || null,
    loading: isLoading,
    error: error?.message || null,
  };
};
