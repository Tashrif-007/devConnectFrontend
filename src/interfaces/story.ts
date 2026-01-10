import type { VoteType } from "../types";
import type { User } from "./auth";
import type { PaginationData } from "./pagination";

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


export interface CreateStoryData {
  storyId: string;
  title: string;
  body: string;
  categoryIds: string[];
  skip: boolean;
  createdAt: string;
}

export interface StoriesData {
  data: Story[];
  pagination: PaginationData;
}

export interface CommentsListData {
  data: Comment[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}