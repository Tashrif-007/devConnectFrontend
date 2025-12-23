import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { storyService } from "../services/storyService";
import type { Story, PaginationData, UseStoriesReturn } from "../types";

export const useStories = (): UseStoriesReturn => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [stories, setStories] = useState<Story[]>([]);
  const [pagination, setPagination] = useState<PaginationData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const itemsPerPage = 9; 

  const fetchStories = useCallback(
    async (page: number = currentPage) => {
      setLoading(true);
      setError(null);

      try {
        setSearchParams({ page: String(page) });

        const response = await storyService.fetchStories(page, itemsPerPage);

        setStories(response.data.data);
        setPagination(response.data.pagination);
        if (response.success === false) {
          setError(response.message);
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch stories";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [currentPage, itemsPerPage, setSearchParams]
  );

  useEffect(() => {
    fetchStories(currentPage);
  }, [currentPage, fetchStories]);

  return {
    stories,
    pagination,
    loading,
    error,
    fetchStories,
  };
};
