import { apiClient } from "./apiClient";
import type {
  StoriesResponse,
  CreateStoryPayload,
  CreateStoryResponse,
  StoryDetailResponse,
  CreateCommentPayload,
  CreateCommentResponse,
  GetCommentsResponse,
} from "../types";

export const storyService = {
  async fetchStories(
    page: number = 1,
    itemsPerPage: number = 10,
    category?: string
  ): Promise<StoriesResponse> {
    return apiClient.get<StoriesResponse>("/stories", {
      params: {
        page,
        itemsPerPage,
        ...(category && { category }),
      },
    });
  },

  async getStoryById(storyId: string): Promise<StoryDetailResponse> {
    return apiClient.get<StoryDetailResponse>(`/stories/${storyId}`);
  },

  async fetchStoriesByUserId(
    userId: string,
    page: number = 1,
    itemsPerPage: number = 10,
    category?: string
  ): Promise<StoriesResponse> {
    return apiClient.get<StoriesResponse>(`/stories/user/${userId}`, {
      params: {
        page,
        itemsPerPage,
        ...(category && { category }),
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

  async createComment(
    storyId: string,
    payload: CreateCommentPayload
  ): Promise<CreateCommentResponse> {
    return apiClient.post<CreateCommentResponse>(
      `/stories/${storyId}/comments`,
      {
        body: payload.body,
      }
    );
  },

  async getCommentsByStoryId(storyId: string): Promise<GetCommentsResponse> {
    return apiClient.get<GetCommentsResponse>(`/stories/${storyId}/comments`);
  },
};
