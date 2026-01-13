import { useMutation } from "@tanstack/react-query";
import { adminService } from "../../services/adminService";
import type { UpdateUserRoleResponse } from "../../types";

export const useUpdateUserRoleMutation = () => {
  const {
    mutateAsync: updateRole,
    isPending: loading,
    error,
  } = useMutation({
    mutationFn: async (params: { userId: string; role: "USER" | "ADMIN" }) => {
      const response = await adminService.updateUserRole(params.userId, {
        role: params.role,
      });

      if (response.success === false) {
        throw new Error(response.error || "Failed to update user role");
      }

      return response as UpdateUserRoleResponse;
    },
  });

  const handleUpdateRole = async (
    userId: string,
    role: "USER" | "ADMIN"
  ): Promise<UpdateUserRoleResponse> => {
    try {
      return await updateRole({ userId, role });
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An error occurred while updating role";
      return { success: false, error: errorMessage, message: errorMessage };
    }
  };

  return {
    updateRole: handleUpdateRole,
    loading,
    error: error?.message || null,
  };
};
