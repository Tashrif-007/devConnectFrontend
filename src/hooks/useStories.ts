import { useGetStories } from "../queries/stories/getStories";
import { useSearchParams } from "react-router-dom";
import { parsePage } from "../utils/pageUtils";
import type { UseStoriesReturn } from "../types";

export const useStories = (): UseStoriesReturn => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parsePage(searchParams.get("page") || "1");
  const currentCategory = searchParams.get("category") || undefined;

  const { stories, pagination, loading, error } = useGetStories(
    currentPage,
    currentCategory
  );

  const filterByCategory = (category: string | null) => {
    if (category) {
      setSearchParams({ page: "1", category });
    } else {
      setSearchParams({ page: "1" });
    }
  };

  const clearFilter = () => {
    filterByCategory(null);
  };

  const fetchStories = async (
    page: number = currentPage,
    category?: string
  ) => {
    if (category) {
      setSearchParams({ page: String(page), category });
    } else {
      setSearchParams({ page: String(page) });
    }
  };

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
