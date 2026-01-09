import { useCallback, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { storyService } from "../services/storyService";
import type { Story } from "../types";

export interface UseUserStoriesReturn {
  stories: Story[];
  loading: boolean;
  error: string | null;
  fetchUserStories: (
    userId: string,
    page?: number,
    itemsPerPage?: number
  ) => Promise<void>;
}

export const useUserStories = (): UseUserStoriesReturn => {
  const queryClient = useQueryClient();
  const [queryKey, setQueryKey] = useState<
    [string, { userId: string; page: number; itemsPerPage: number }] | null
  >(null);

  const fetchUserStories = useCallback(
    async (userId: string, page: number = 1, itemsPerPage: number = 10) => {
      const newQueryKey: [
        string,
        { userId: string; page: number; itemsPerPage: number }
      ] = ["userStories", { userId, page, itemsPerPage }];
      setQueryKey(newQueryKey);

      const response = await storyService.fetchStoriesByUserId(
        userId,
        page,
        itemsPerPage
      );

      if (response.success && response.data) {
        queryClient.setQueryData(newQueryKey, response.data.data);
      }
    },
    [queryClient]
  );

  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: queryKey || ["userStories"],
    queryFn: async () => {
      if (!queryKey) return [];
      const [, { userId, page, itemsPerPage }] = queryKey;
      const response = await storyService.fetchStoriesByUserId(
        userId,
        page,
        itemsPerPage
      );
      if (response.success && response.data) {
        return response.data.data;
      }
      return [];
    },
    enabled: !!queryKey,
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    stories: data,
    loading: isLoading,
    error: error?.message || null,
    fetchUserStories,
  };
};
