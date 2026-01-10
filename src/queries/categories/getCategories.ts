import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../../services/categoryService";
import { QUERY_CONFIG } from "../../constants";

export const useGetCategories = () => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: [QUERY_CONFIG.QUERY_KEYS.CATEGORIES],
    queryFn: async () => {
      const response = await categoryService.fetchCategories();
      return response || [];
    },
    staleTime: QUERY_CONFIG.STALE_TIMES.CATEGORIES,
    gcTime: QUERY_CONFIG.GC_TIMES.CATEGORIES,
  });

  return {
    categories: data,
    loading: isLoading,
    error: error?.message || null,
  };
};
