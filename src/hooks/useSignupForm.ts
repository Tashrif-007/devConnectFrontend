import { useState, useCallback } from "react";
import { validateForm as validateFormUtil } from "../utils/validation";
import { parseFieldErrors } from "../utils/errorParser";
import type { FormErrors } from "../types/index";
import type { SignupPayload } from "../interfaces";

export const useSignupForm = () => {
  const [formData, setFormData] = useState<SignupPayload>({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    },
    [errors]
  );

  const validateForm = useCallback(() => {
    const newErrors = validateFormUtil(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }
    return true;
  }, [formData]);

  const handleSignupSuccess = useCallback(() => {
    setFormData({
      username: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  }, []);

  const handleSignupError = useCallback((hookError: string | null) => {
    if (!hookError) return;
    const { form: generalError, fields: fieldErrors } =
      parseFieldErrors(hookError);

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
    } else {
      setErrors({ form: generalError });
    }
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      username: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  }, []);

  return {
    formData,
    errors,
    showPassword,
    showConfirmPassword,
    handleInputChange,
    validateForm,
    handleSignupSuccess,
    handleSignupError,
    resetForm,
    setShowPassword,
    setShowConfirmPassword,
  };
};
