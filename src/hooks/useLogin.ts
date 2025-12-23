import { useState, useCallback } from "react";
import { useAuth } from "../hooks/useAuth";
import { authService } from "../services/authService";
import type { LoginPayload, LoginResponse, UseLoginReturn } from "../types";

export const useLogin = (): UseLoginReturn & {
  login: (payload: LoginPayload) => Promise<LoginResponse>;
} => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login: authLogin } = useAuth();

  const login = useCallback(
    async (payload: LoginPayload): Promise<LoginResponse> => {
      setLoading(true);
      setError(null);

      try {
        const response = await authService.login(payload);

        if (response.success === false) {
          const errorMessage = response.error;
          setError(errorMessage!);
          return response as LoginResponse;
        }

        if (response.data) {
          authLogin(response.data.user, response.data.token);
        }
        setError(null);
        return response;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An error occurred during login";
        setError(errorMessage);
        return { success: false, error: errorMessage };
      } finally {
        setLoading(false);
      }
    },
    [authLogin]
  );

  return { login, loading, error };
};
