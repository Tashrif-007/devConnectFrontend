export type { ApiResponse } from "../interfaces/common";
export type { FormErrors } from "../interfaces/common";

export type { PaginationData } from "../interfaces/pagination";

export type { User, SignupPayload, LoginPayload } from "../interfaces/auth";
export type {
  SignupResponse,
  LoginResponse,
  UpdatePasswordResponse,
  ResendConfirmationEmailResponse,
} from "./auth";
export type {
  CreateStoryResponse,
  StoryDetailResponse,
  CreateCommentResponse,
  GetCommentsResponse,
  StoriesResponse,
} from "./story";
export type {
  Story,
  Comment,
  CreateCommentPayload,
} from "../interfaces/stories";

export type { UserVoteType, VoteResponse } from "./vote";

export type {
  GetUsersResponse,
  GetUserByIdResponse,
  UpdateUserRoleResponse,
  DeleteUserResponse,
} from "./user";
export { USER_ROLES } from "./user";

export type {
  UseSignupReturn,
  UseLoginReturn,
  UseStoriesReturn,
  UseCommentsReturn,
  UseVotingReturn,
} from "../interfaces/hooks";

export type {
  CreateCategoryResponse,
  DeleteCategoryResponse,
  CategoryResponse,
} from "./categories";

export type {
  SortByValue,
  UserOrderByValue,
  StoryOrderByValue,
  OrderByValue,
} from "./search";
