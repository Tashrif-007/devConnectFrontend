import type { User } from "../interfaces/auth";
import type { ApiResponse } from "../interfaces/common";
import type { GetUsersData } from "../interfaces/user";

export const USER_ROLES =  {
  USER:  "USER",
  ADMIN:"ADMIN",
} as const;

export type GetUsersResponse = ApiResponse<GetUsersData>;

export type GetUserByIdResponse = ApiResponse<User>;
export type USER_ROLES = typeof USER_ROLES[keyof typeof USER_ROLES];

export type UpdateUserRoleResponse = ApiResponse<{ message: string }>;

export type DeleteUserResponse = ApiResponse;
