import { apiClient } from "./apiClient";

export interface TrendingCategory {
  categoryId: string;
  name: string;
  storyCount: number;
}

export interface TrendingCategoriesResponse {
  success: boolean;
  message: string;
  data: TrendingCategory[];
}

export const trendingService = {
  fetchTrendingCategories: async (): Promise<TrendingCategory[]> => {
    try {
      const response =
        await apiClient.get<TrendingCategoriesResponse>("/categories/trending");

      if (response.success) {
        return response.data;
      }

      throw new Error(
        response.message || "Failed to fetch trending categories"
      );
    } catch (error) {
      throw error instanceof Error
        ? error
        : new Error("Failed to fetch trending categories");
    }
  },
};
