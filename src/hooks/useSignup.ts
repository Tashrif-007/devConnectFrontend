import { useState, useCallback } from "react";
import { authService } from "../services/authService";
import type { SignupPayload, SignupResponse, UseSignupReturn } from "../types";

export const useSignup = (): UseSignupReturn & {
  signup: (payload: SignupPayload) => Promise<SignupResponse>;
} => {
  const [loading, setLoading] = useState<true | false>(false);
  const [error, setError] = useState<string | null>(null);

  const signup = useCallback(
    async (payload: SignupPayload): Promise<SignupResponse> => {
      setLoading(true);
      setError(null);

      try {
        const response = await authService.signup(payload);

        if (response.success === false) {
          const errorMessage = response.error;
          setError(errorMessage!);
          return response;
        }

        setError(null);
        return response;
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "An error occurred during signup";
        setError(errorMessage);
        return { success: false, error: errorMessage };
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { signup, loading, error };
};
