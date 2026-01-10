import { apiClient } from "./apiClient";
import { API_ENDPOINTS, UI_MESSAGES } from "../constants";
import type {
  UpdateUserRolePayload,
  UpdateUserRoleResponse,
  DeleteUserResponse,
  DeleteCategoryResponse,
} from "../types";

export const adminService = {
  async updateUserRole(
    userId: string,
    payload: UpdateUserRolePayload
  ): Promise<UpdateUserRoleResponse> {
    return apiClient.patch<UpdateUserRoleResponse>(
      API_ENDPOINTS.ADMIN.UPDATE_USER_ROLE(userId),
      payload
    );
  },

  async deleteUser(userId: string): Promise<DeleteUserResponse> {
    await apiClient.delete(API_ENDPOINTS.USERS.BY_ID(userId));
    return { success: true, message: UI_MESSAGES.SUCCESS.USER_DELETED };
  },

  async deleteCategory(categoryId: string): Promise<DeleteCategoryResponse> {
    await apiClient.delete(API_ENDPOINTS.CATEGORIES.BY_ID(categoryId));
    return { success: true, message: UI_MESSAGES.SUCCESS.CATEGORY_DELETED };
  },
};
