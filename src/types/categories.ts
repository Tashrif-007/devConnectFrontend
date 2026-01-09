import type { ApiResponse } from "./common";

export interface Category {
  categoryId: string;
  name: string;
  description?: string;
  createdAt?: string;
}

export interface CreateCategoryPayload {
  name: string;
  description?: string;
}

export type CategoryResponse = ApiResponse<Category[]>;

export type CreateCategoryResponse = ApiResponse<Category>;

export type DeleteCategoryResponse = ApiResponse;