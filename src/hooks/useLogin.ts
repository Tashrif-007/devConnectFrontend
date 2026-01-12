import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../hooks/useAuth";
import { authService } from "../services/authService";
import type { LoginResponse } from "../types";
import type { LoginPayload } from "../interfaces";

export const useLogin = () => {
  const { login: authLogin } = useAuth();

  const {
    mutate: login,
    isPending: loading,
    error,
  } = useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: async (payload: LoginPayload) => {
      const response = await authService.login(payload);
      return response;
    },
    onSuccess: (response) => {
      if (response.success && response.data) {
        authLogin(response.data.user, response.data.token);
      }
    },
  });

  return {
    login: async (payload: LoginPayload): Promise<LoginResponse> => {
      return new Promise((resolve, reject) => {
        login(payload, {
          onSuccess: (response) => resolve(response),
          onError: (error) => reject(error),
        });
      });
    },
    loading,
    error: error?.message || null,
  };
};
