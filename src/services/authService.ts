import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "../constants";
import type {
  SignupResponse,
  LoginResponse,
  UpdatePasswordResponse,
  ResendConfirmationEmailResponse,
} from "../types";
import type { LoginPayload, SignupPayload } from "../interfaces";
import type { ResendConfirmationEmailPayload, UpdatePasswordPayload } from "../interfaces/auth";

export const authService = {
  async signup(payload: SignupPayload): Promise<SignupResponse> {
    return apiClient.post<SignupResponse>(API_ENDPOINTS.AUTH.SIGNUP, {
      username: payload.username,
      name: payload.name,
      email: payload.email,
      password: payload.password,
      confirmPassword: payload.confirmPassword,
    });
  },
  async login(payload: LoginPayload): Promise<LoginResponse> {
    return apiClient.post<LoginResponse>(API_ENDPOINTS.AUTH.LOGIN, {
      email: payload.email,
      password: payload.password,
    });
  },
  async updatePassword(
    payload: UpdatePasswordPayload
  ): Promise<UpdatePasswordResponse> {
    const response = await apiClient.post<UpdatePasswordResponse>(
      API_ENDPOINTS.AUTH.UPDATE_PASSWORD,
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
      API_ENDPOINTS.AUTH.RESEND_CONFIRMATION_EMAIL,
      {
        email: payload.email,
      }
    );
    return response;
  },
};
