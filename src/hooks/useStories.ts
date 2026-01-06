import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { storyService } from "../services/storyService";
import { parsePage } from "../utils/pageUtils";
import type { Story, PaginationData, UseStoriesReturn } from "../types";

export const useStories = (): UseStoriesReturn => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [stories, setStories] = useState<Story[]>([]);
  const [pagination, setPagination] = useState<PaginationData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentPage = parsePage(searchParams.get("page") || "1");
  const currentCategory = searchParams.get("category") || undefined;
  const itemsPerPage = 5;

  const fetchStories = useCallback(
    async (page: number = currentPage, category?: string) => {
      setLoading(true);
      setError(null);

      try {
        const params: Record<string, string> = { page: String(page) };
        if (category) {
          params.category = category;
        }
        setSearchParams(params);

        const response = await storyService.fetchStories(
          page,
          itemsPerPage,
          category
        );
        if (response.success && response.data) {
          setStories(response.data.data);
          setPagination(response.data.pagination);
        }

        if (response.success === false) {
          setError(response.error!);
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
    fetchStories(currentPage, currentCategory);
  }, [currentPage, currentCategory, fetchStories]);

  const filterByCategory = useCallback(
    (category: string | null) => {
      if (category) {
        fetchStories(1, category);
      } else {
        setSearchParams({ page: "1" });
        fetchStories(1, undefined);
      }
    },
    [fetchStories, setSearchParams]
  );

  const clearFilter = useCallback(() => {
    filterByCategory(null);
  }, [filterByCategory]);

  return {
    stories,
    pagination,
    loading,
    error,
    fetchStories,
    filterByCategory,
    clearFilter,
    currentCategory,
  };
};
