import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../../services/categoryService";

export const useGetCategories = () => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await categoryService.fetchCategories();
      return response || [];
    },
    staleTime: 5 * 60 * 1000, 
    gcTime: 10 * 60 * 1000, 
  });

  return {
    categories: data,
    loading: isLoading,
    error: error?.message || null,
  };
};
