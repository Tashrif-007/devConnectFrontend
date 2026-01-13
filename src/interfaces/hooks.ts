import type { Comment, LoginResponse, PaginationData, SignupResponse, Story, UserVoteType } from "../types";
import type { LoginPayload, SignupPayload } from "./auth";

export interface UseSignupReturn {
  signup: (payload: SignupPayload) => Promise<SignupResponse>;
  loading: boolean;
  error: string | null;
}

export interface UseLoginReturn {
  login: (payload: LoginPayload) => Promise<LoginResponse>;
  loading: boolean;
  error: string | null;
}

export interface UseStoriesReturn {
  stories: Story[];
  pagination: PaginationData | null;
  loading: boolean;
  error: string | null;
  fetchStories: (page: number, category?: string) => Promise<void>;
  filterByCategory: (category: string | null) => void;
  clearFilter: () => void;
  currentCategory: string | undefined;
}

export interface UseCommentsReturn {
  comments: Comment[];
  loading: boolean;
  error: string | null;
  addComment: (storyId: string, body: string) => Promise<boolean>;
  fetchComments: (storyId: string) => Promise<void>;
}

export interface UseVotingReturn {
  localUpvotes: number;
  localDownvotes: number;
  userVoteType: UserVoteType;
  loading: boolean;
  error: string | null;
  handleUpvote: (e: React.MouseEvent) => Promise<void>;
  handleDownvote: (e: React.MouseEvent) => Promise<void>;
  clearError: () => void;
}