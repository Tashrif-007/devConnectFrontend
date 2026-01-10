import type { ApiResponse } from "../interfaces/common";
import type { CommentsListData, CreateStoryData, CreateStoryPayload, StoriesData, Story } from "../interfaces/story";

export type CreateStoryResponse = ApiResponse<CreateStoryData>;

export type StoryDetailResponse = ApiResponse<Story>;

export type CreateCommentResponse = ApiResponse<Comment>;



export type GetCommentsResponse = ApiResponse<CommentsListData>;



export type StoriesResponse = ApiResponse<StoriesData>;
export type UpdateStoryPayload = Partial<CreateStoryPayload>;
