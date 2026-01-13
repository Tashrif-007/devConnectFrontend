import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "../constants";
import type {
  StoriesResponse,
  CreateStoryResponse,
  StoryDetailResponse,
  CreateCommentPayload,
  CreateCommentResponse,
  GetCommentsResponse,
} from "../types";
import type { UpdateStoryPayload } from "../types/story";
import type { CreateStoryPayload } from "../interfaces";

export const storyService = {
  async fetchStories(
    page: number = 1,
    itemsPerPage: number = 10,
    category?: string,
    find?: string,
    sortBy?: string,
    orderBy?: string
  ): Promise<StoriesResponse> {
    return apiClient.get<StoriesResponse>(API_ENDPOINTS.STORIES.BASE, {
      params: {
        page,
        itemsPerPage,
        ...(category && { category }),
        ...(find && { find }),
        ...(sortBy && { sortBy }),
        ...(orderBy && { orderBy }),
      },
    });
  },

  async getStoryById(storyId: string): Promise<StoryDetailResponse> {
    return apiClient.get<StoryDetailResponse>(
      API_ENDPOINTS.STORIES.BY_ID(storyId)
    );
  },

  async fetchStoriesByUserId(
    userId: string,
    page: number = 1,
    itemsPerPage: number = 10,
    category?: string
  ): Promise<StoriesResponse> {
    return apiClient.get<StoriesResponse>(
      API_ENDPOINTS.STORIES.BY_USER_ID(userId),
      {
        params: {
          page,
          itemsPerPage,
          ...(category && { category }),
        },
      }
    );
  },

  async createStory(payload: CreateStoryPayload): Promise<CreateStoryResponse> {
    return apiClient.post<CreateStoryResponse>(API_ENDPOINTS.STORIES.BASE, {
      title: payload.title,
      body: payload.body,
      categoryIds: payload.categoryIds,
      skip: payload.skip,
    });
  },
  async updateStory(
    storyId: string,
    payload: UpdateStoryPayload
  ): Promise<CreateStoryResponse> {
    return apiClient.put<CreateStoryResponse>(
      API_ENDPOINTS.STORIES.BY_ID(storyId),
      payload
    );
  },

  async deleteStory(storyId: string): Promise<void> {
    return apiClient.delete(API_ENDPOINTS.STORIES.BY_ID(storyId));
  },

  async createComment(
    storyId: string,
    payload: CreateCommentPayload
  ): Promise<CreateCommentResponse> {
    return apiClient.post<CreateCommentResponse>(
      API_ENDPOINTS.STORIES.COMMENTS(storyId),
      {
        body: payload.body,
      }
    );
  },

  async deleteComment(commentId: string): Promise<void> {
    return apiClient.delete(API_ENDPOINTS.STORIES.COMMENT_DELETE(commentId));
  },

  async getCommentsByStoryId(storyId: string): Promise<GetCommentsResponse> {
    return apiClient.get<GetCommentsResponse>(
      API_ENDPOINTS.STORIES.COMMENTS(storyId)
    );
  },
};
