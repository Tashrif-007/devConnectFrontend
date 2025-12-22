import { useState, useCallback } from "react";
import { useAuth } from "../hooks/useAuth";
import type { LoginPayload, LoginResponse, UseLoginReturn } from "../types";

export const useLogin = (): UseLoginReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login: authLogin } = useAuth();

  const login = useCallback(
    async (payload: LoginPayload): Promise<LoginResponse> => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: payload.emailOrUsername,
              password: payload.password,
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Login failed");
        }

        const data: LoginResponse = await response.json();

        if (data.success && data.data) {
          authLogin(data.data.user, data.data.token);
        }

        setLoading(false);
        return data;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An error occurred during login";
        setError(errorMessage);
        setLoading(false);
        throw new Error(errorMessage);
      }
    },
    [authLogin]
  );

  return { login, loading, error };
};
