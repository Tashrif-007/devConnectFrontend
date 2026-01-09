import type { ApiResponse } from "./common";
import type { PaginationData } from "./pagination";
import type { User } from "./auth";

export const USER_ROLES =  {
  USER:  "USER",
  ADMIN:"ADMIN",
} as const;

export type USER_ROLES = typeof USER_ROLES[keyof typeof USER_ROLES];

export interface GetUsersParams {
  page?: number;
  itemsPerPage?: number;
  sortBy?: "ASC" | "DESC";
  orderBy?: string;
  find?: string;
}

export interface GetUsersData {
  data: User[];
  pagination: PaginationData;
}

export type GetUsersResponse = ApiResponse<GetUsersData>;

export type GetUserByIdResponse = ApiResponse<User>;

export interface UpdateUserRolePayload {
  role: USER_ROLES;
}

export interface UpdateUserPayload {
  name?: string;
  bio?: string;
  image?: File;
}

export type UpdateUserRoleResponse = ApiResponse<{ message: string }>;

export type DeleteUserResponse = ApiResponse;
