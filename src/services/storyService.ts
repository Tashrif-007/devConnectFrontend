import { apiClient } from "./apiClient";
import type { StoriesResponse } from "../types";

export const storyService = {
  async fetchStories(
    page: number = 1,
    itemsPerPage: number = 10
  ): Promise<StoriesResponse> {
    return apiClient.get<StoriesResponse>("/stories", {
      params: {
        page,
        itemsPerPage,
      },
    });
  },
};
