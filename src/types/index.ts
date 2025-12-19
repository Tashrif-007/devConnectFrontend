export interface FormData {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormData {
  emailOrUsername: string;
  password: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface SignupPayload {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
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

export interface SignupResponse {
  success: boolean;
  data: SignupResponseData;
  message: string;
}

export interface UseSignupReturn {
  signup: (payload: SignupPayload) => Promise<SignupResponse>;
  loading: boolean;
  error: string | null;
}

export interface LoginPayload {
  emailOrUsername: string;
  password: string;
}

export interface LoginUser {
  userId: string;
  email: string;
  username: string;
  name: string;
  role: string;
  isEmailConfirmed: boolean;
  profilePictureUrl: string | null;
}

export interface LoginResponseData {
  token: string;
  user: LoginUser;
}

export interface LoginResponse {
  success: boolean;
  data: LoginResponseData;
  message: string;
}

export interface UseLoginReturn {
  login: (payload: LoginPayload) => Promise<LoginResponse>;
  loading: boolean;
  error: string | null;
}
