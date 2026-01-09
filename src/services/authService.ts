import { apiClient } from "./apiClient";
import type {
  SignupPayload,
  SignupResponse,
  LoginPayload,
  LoginResponse,
  UpdatePasswordPayload,
  UpdatePasswordResponse,
  ResendConfirmationEmailPayload,
  ResendConfirmationEmailResponse,
} from "../types";

export const authService = {
  async signup(payload: SignupPayload): Promise<SignupResponse> {
    return apiClient.post<SignupResponse>("/auth/signup", {
      username: payload.username,
      name: payload.name,
      email: payload.email,
      password: payload.password,
      confirmPassword: payload.confirmPassword,
    });
  },
  async login(payload: LoginPayload): Promise<LoginResponse> {
    return apiClient.post<LoginResponse>("/auth/login", {
      email: payload.email,
      password: payload.password,
    });
  },
  async updatePassword(
    payload: UpdatePasswordPayload
  ): Promise<UpdatePasswordResponse> {
    const response = await apiClient.post<UpdatePasswordResponse>(
      "/auth/update-password",
      {
        oldPassword: payload.oldPassword,
        newPassword: payload.newPassword,
        confirmPassword: payload.confirmPassword,
      }
    );
    return response;
  },
  async resendConfirmationEmail(
    payload: ResendConfirmationEmailPayload
  ): Promise<ResendConfirmationEmailResponse> {
    const response = await apiClient.post<ResendConfirmationEmailResponse>(
      "/auth/resend-confirmation-email",
      {
        email: payload.email,
      }
    );
    return response;
  },
};
