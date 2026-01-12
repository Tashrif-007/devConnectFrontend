import type { CONTENT_TABS } from "../constants";
import type { CreateStoryData, Story, CommentsListData, StoriesData, CreateStoryPayload } from "../interfaces";
import type { ApiResponse } from "../interfaces/common";
export type CreateStoryResponse = ApiResponse<CreateStoryData>;
export type StoryDetailResponse = ApiResponse<Story>;
export type CreateCommentResponse = ApiResponse<Comment>;
export type GetCommentsResponse = ApiResponse<CommentsListData>
export type ContentTabType = typeof CONTENT_TABS[keyof typeof CONTENT_TABS];
export type StoriesResponse = ApiResponse<StoriesData>;
export type UpdateStoryPayload = Partial<CreateStoryPayload>;
