import type { USER_ROLES } from "../types";
import type { User } from "./auth";
import type { PaginationData } from "./pagination";

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
export interface UpdateUserRolePayload {
  role: USER_ROLES;
}

export interface UpdateUserPayload {
  name?: string;
  bio?: string;
  image?: File;
}