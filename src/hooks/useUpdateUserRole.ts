import { useState, useCallback } from "react";
import {
  adminService,
} from "../services/adminService";
import type { UpdateUserRoleResponse } from "../types";

export const useUpdateUserRole = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateRole = useCallback(
    async (
      userId: string,
      role: "USER" | "ADMIN"
    ): Promise<UpdateUserRoleResponse> => {
      setLoading(true);
      setError(null);

      try {
        const response = await adminService.updateUserRole(userId, { role });

        if (response.success === false) {
          const errorMessage = response.error || "Failed to update user role";
          setError(errorMessage);
          return response;
        }

        setError(null);
        return response;
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "An error occurred while updating role";
        setError(errorMessage);
        return { success: false, error: errorMessage, message: errorMessage };
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { updateRole, loading, error };
};
