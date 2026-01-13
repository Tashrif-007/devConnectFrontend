import type { ApiResponse } from "../interfaces";
import type { LoginResponseData, SignupResponseData } from "../interfaces/auth";

export type LoginResponse = ApiResponse<LoginResponseData>;

export type UpdatePasswordResponse = ApiResponse<{ message: string }>;


export type ResendConfirmationEmailResponse = ApiResponse<null>;
export type SignupResponse = ApiResponse<SignupResponseData>;
