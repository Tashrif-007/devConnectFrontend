import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adminService } from "../../services/adminService";

export const useDeleteCategoryMutation = () => {
  const queryClient = useQueryClient();

  const deleteCategoryMutation = useMutation({
    mutationFn: async (categoryId: string) => {
      await adminService.deleteCategory(categoryId);
      return categoryId;
    },
    onSuccess: (categoryId) => {
      const oldCategories = queryClient.getQueryData(["categories"]) as any[];
      if (oldCategories) {
        const updatedCategories = oldCategories.filter(
          (cat) => cat.categoryId !== categoryId
        );
        queryClient.setQueryData(["categories"], updatedCategories);
      }
    },
  });

  return {
    deleteCategoryMutation,
  };
};
