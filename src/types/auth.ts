import type { ApiResponse } from "./common";
import type { USER_ROLES } from "./user";

export interface User {
  userId: string;
  username: string;
  name: string;
  email: string;
  joinDate: Date;
  isEmailConfirmed: boolean;
  role: USER_ROLES | string;
  profilePictureUrl: string | null;
  bio?: string | null;
}

export interface SignupPayload {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface UpdatePasswordPayload {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ResendConfirmationEmailPayload {
  email: string;
}

export interface SignupResponseData {
  userId: string;
  username: string;
  name: string;
  email: string;
  joinDate: string;
  isEmailConfirmed: boolean;
  role: string;
  profilePictureUrl: string | null;
}

export type SignupResponse = ApiResponse<SignupResponseData>;

export interface LoginResponseData {
  token: string;
  user: User;
}

export type LoginResponse = ApiResponse<LoginResponseData>;

export type UpdatePasswordResponse = ApiResponse<{ message: string }>;

export interface ProtectedRouteProps {
  element: React.ReactNode;
  requiredRole?: string;
}
export type ResendConfirmationEmailResponse = ApiResponse<null>;
