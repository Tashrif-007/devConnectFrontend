import { apiClient } from "./apiClient";
import type {
  SignupPayload,
  SignupResponse,
  LoginPayload,
  LoginResponse,
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
      email: payload.emailOrUsername,
      password: payload.password,
    });
  },
};
