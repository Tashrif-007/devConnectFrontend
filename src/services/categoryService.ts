import { apiClient } from "./apiClient";

export interface Category {
  categoryId: string;
  name: string;
  description?: string;
  createdAt?: string;
}

export interface CategoryResponse {
  success: boolean;
  message: string;
  data: Category[];
}

export const categoryService = {
  fetchCategories: async (): Promise<Category[]> => {
    try {
      const response = await apiClient.get<CategoryResponse>("/categories");

      if (response.success) {
        return response.data;
      }

      throw new Error(response.message || "Failed to fetch categories");
    } catch (error) {
      throw error instanceof Error
        ? error
        : new Error("Failed to fetch categories");
    }
  },
};
