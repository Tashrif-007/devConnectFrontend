import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/authService";
import type { UpdatePasswordPayload, UpdatePasswordResponse } from "../types";

export const useChangePassword = () => {
  const {
    mutate: changePasswordMutation,
    isPending: loading,
    error,
  } = useMutation<UpdatePasswordResponse, Error, UpdatePasswordPayload>({
    mutationFn: async (payload: UpdatePasswordPayload) => {
      const response = await authService.updatePassword(payload);
      return response;
    },
  });

  return {
    changePassword: async (
      payload: UpdatePasswordPayload
    ): Promise<UpdatePasswordResponse> => {
      return new Promise((resolve, reject) => {
        changePasswordMutation(payload, {
          onSuccess: (response) => resolve(response),
          onError: (error) => reject(error),
        });
      });
    },
    loading,
    error: error?.message || null,
  };
};
