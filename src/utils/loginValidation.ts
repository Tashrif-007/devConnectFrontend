import type { FormErrors, LoginPayload } from "../types";

export const validateLoginForm = (formData: LoginPayload): FormErrors => {
  const newErrors: FormErrors = {};

  if (!formData.email.trim()) {
    newErrors.email = "Email or username is required";
  }
  if (!formData.password.trim()) {
    newErrors.password = "Password is required";
  }

  return newErrors;
};

export const classifyLoginError = (
  errorMessage: string
): "email" | "password" | "general" => {
  if (!errorMessage) return "general";

  const emailErrorKeywords = ["email", "user", "username", "not found"];
  const isEmailError = emailErrorKeywords.some((keyword) =>
    errorMessage.toLowerCase().includes(keyword)
  );

  if (isEmailError) {
    return "email";
  }
  return "password";
};
