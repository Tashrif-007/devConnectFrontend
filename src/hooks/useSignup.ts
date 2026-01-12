import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/authService";
import type { SignupResponse } from "../types";
import type { SignupPayload } from "../interfaces";

export const useSignup = () => {
  const {
    mutate: signup,
    isPending: loading,
    error,
  } = useMutation<SignupResponse, Error, SignupPayload>({
    mutationFn: async (payload: SignupPayload) => {
      const response = await authService.signup(payload);
      return response;
    },
  });

  return {
    signup: async (payload: SignupPayload): Promise<SignupResponse> => {
      return new Promise((resolve, reject) => {
        signup(payload, {
          onSuccess: (response) => resolve(response),
          onError: (error) => reject(error),
        });
      });
    },
    loading,
    error: error?.message || null,
  };
};
