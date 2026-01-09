import { apiClient } from "./apiClient";
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
      `/admin/role/${userId}`,
      payload
    );
  },

  async deleteUser(userId: string): Promise<DeleteUserResponse> {
    await apiClient.delete(`/users/${userId}`);
    return { success: true, message: "User deleted successfully" };
  },

  async deleteCategory(categoryId: string): Promise<DeleteCategoryResponse> {
    await apiClient.delete(`/categories/${categoryId}`);
    return { success: true, message: "Category deleted successfully" };
  },
};
