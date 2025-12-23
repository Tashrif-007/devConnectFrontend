import { apiClient } from "./apiClient";
import type { StoriesResponse } from "../types";

export interface CreateStoryPayload {
  title: string;
  body: string;
  categoryIds: string[];
  skip: boolean;
}

export interface CreateStoryResponse {
  success: boolean;
  message: string;
  data?: {
    storyId: string;
    title: string;
    body: string;
    categoryIds: string[];
    skip: boolean;
    createdAt: string;
  };
}

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

  async createStory(payload: CreateStoryPayload): Promise<CreateStoryResponse> {
    return apiClient.post<CreateStoryResponse>("/stories", {
      title: payload.title,
      body: payload.body,
      categoryIds: payload.categoryIds,
      skip: payload.skip,
    });
  },
};
