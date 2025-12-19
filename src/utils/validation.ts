import type { FormData, FormErrors } from "../types/index";

export const validateForm = (formData: FormData): FormErrors => {
  const newErrors: FormErrors = {};

  if (!formData.username.trim()) {
    newErrors.username = "Username is required";
  }
  if (!formData.name.trim()) {
    newErrors.name = "Full name is required";
  }
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Please enter a valid email";
  }
  if (!formData.password.trim()) {
    newErrors.password = "Password is required";
  } else if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
  }
  if (!formData.confirmPassword.trim()) {
    newErrors.confirmPassword = "Please confirm your password";
  } else if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  return newErrors;
};
