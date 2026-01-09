import { apiClient } from "./apiClient";
import type {
  Category,
  CreateCategoryPayload,
  CategoryResponse,
  CreateCategoryResponse,
} from "../types";

export const categoryService = {
  fetchCategories: async (): Promise<Category[]> => {
    try {
      const response = await apiClient.get<CategoryResponse>("/categories");

      if (response.success && response.data) {
        return response.data;
      }

      throw new Error(response.error || "Failed to fetch categories");
    } catch (error) {
      throw error instanceof Error
        ? error
        : new Error("Failed to fetch categories");
    }
  },

  createCategory: async (payload: CreateCategoryPayload): Promise<Category> => {
    try {
      const response = await apiClient.post<CreateCategoryResponse>(
        "/categories",
        payload
      );

      if (response.success && response.data) {
        return response.data;
      }

      throw new Error(response.message || "Failed to create category");
    } catch (error) {
      throw error instanceof Error
        ? error
        : new Error("Failed to create category");
    }
  },
};
