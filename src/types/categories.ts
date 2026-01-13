import type { ApiResponse } from "../interfaces";
import type { Category } from "../interfaces/categories";

export type CategoryResponse = ApiResponse<Category[]>;

export type CreateCategoryResponse = ApiResponse<Category>;

export type DeleteCategoryResponse = ApiResponse;