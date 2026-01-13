import { apiClient } from "./apiClient";
import { API_ENDPOINTS, UI_MESSAGES } from "../constants";
import type {
  CategoryResponse,
  CreateCategoryResponse,
} from "../types";
import type { Category, CreateCategoryPayload } from "../interfaces";

export const categoryService = {
  fetchCategories: async (): Promise<Category[]> => {
    try {
      const response = await apiClient.get<CategoryResponse>(
        API_ENDPOINTS.CATEGORIES.BASE
      );

      if (response.success && response.data) {
        return response.data;
      }

      throw new Error(
        response.error || UI_MESSAGES.ERROR.FAILED_TO_FETCH_CATEGORIES
      );
    } catch (error) {
      throw error instanceof Error
        ? error
        : new Error(UI_MESSAGES.ERROR.FAILED_TO_FETCH_CATEGORIES);
    }
  },

  createCategory: async (payload: CreateCategoryPayload): Promise<Category> => {
    try {
      const response = await apiClient.post<CreateCategoryResponse>(
        API_ENDPOINTS.CATEGORIES.BASE,
        payload
      );

      if (response.success && response.data) {
        return response.data;
      }

      throw new Error(
        response.message || UI_MESSAGES.ERROR.FAILED_TO_CREATE_CATEGORY
      );
    } catch (error) {
      throw error instanceof Error
        ? error
        : new Error(UI_MESSAGES.ERROR.FAILED_TO_CREATE_CATEGORY);
    }
  },
};
