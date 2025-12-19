import { useState, useCallback } from "react";
import type { SignupPayload, SignupResponse, UseSignupReturn } from "../types";

export const useSignup = (): UseSignupReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signup = useCallback(
    async (payload: SignupPayload): Promise<SignupResponse> => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: payload.username,
              name: payload.name,
              email: payload.email,
              password: payload.password,
              confirmPassword: payload.confirmPassword,
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Signup failed");
        }

        const data: SignupResponse = await response.json();
        setLoading(false);
        return data;
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "An error occurred during signup";
        setError(errorMessage);
        setLoading(false);
        throw new Error(errorMessage);
      }
    },
    []
  );

  return { signup, loading, error };
};
