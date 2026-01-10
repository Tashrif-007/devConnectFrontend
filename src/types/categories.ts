import type { Category } from "../interfaces/categories";
import type { ApiResponse } from "./common";

export type CategoryResponse = ApiResponse<Category[]>;

export type CreateCategoryResponse = ApiResponse<Category>;

export type DeleteCategoryResponse = ApiResponse;