import type { ApiResponse } from "./common";
import type { User } from "./auth";
import type { PaginationData } from "./pagination";
import type { VoteType } from "./vote";

export interface Story {
  storyId: string;
  title: string;
  body: string;
  user: User;
  categoryNames: string[];
  summary?: string;
  createdAt: string;
  updatedAt: string;
  votes: VoteType;
  comments?: Comment[];
}

export interface Comment {
  commentId: string;
  body: string;
  user: User;
  storyId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateStoryPayload {
  title: string;
  body: string;
  categoryIds: string[];
  skip: boolean;
}

export interface CreateCommentPayload {
  body: string;
}

export interface CreateStoryData {
  storyId: string;
  title: string;
  body: string;
  categoryIds: string[];
  skip: boolean;
  createdAt: string;
}

export type CreateStoryResponse = ApiResponse<CreateStoryData>;

export type StoryDetailResponse = ApiResponse<Story>;

export type CreateCommentResponse = ApiResponse<Comment>;

export interface CommentsListData {
  data: Comment[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export type GetCommentsResponse = ApiResponse<CommentsListData>;

export interface StoriesData {
  data: Story[];
  pagination: PaginationData;
}

export type StoriesResponse = ApiResponse<StoriesData>;
