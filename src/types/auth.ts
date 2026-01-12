import type { LoginResponseData, SignupResponseData } from "../interfaces/auth";
import type { ApiResponse } from "./common";

export type LoginResponse = ApiResponse<LoginResponseData>;

export type UpdatePasswordResponse = ApiResponse<{ message: string }>;


export type ResendConfirmationEmailResponse = ApiResponse<null>;
export type SignupResponse = ApiResponse<SignupResponseData>;
