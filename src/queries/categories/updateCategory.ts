import { useMutation, useQueryClient } from "@tanstack/react-query";
import { categoryService } from "../../services/categoryService";

export const useUpdateCategoryMutation = () => {
  const queryClient = useQueryClient();

  const {
    mutateAsync: updateCategoryMutation,
    isPending: loading,
    error,
  } = useMutation({
    mutationFn: async (params: {
      categoryId: string;
      name: string;
      description?: string;
    }) => {
      // Note: Implement based on your categoryService API
      // const response = await categoryService.updateCategory(params.categoryId, { name: params.name, description: params.description });
      // return response;
      return params;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });

  return {
    updateCategory: async (
      categoryId: string,
      name: string,
      description?: string
    ) => {
      await updateCategoryMutation({ categoryId, name, description });
    },
    loading,
    error: error?.message || null,
  };
};
