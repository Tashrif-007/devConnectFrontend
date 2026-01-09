import { useState, useCallback } from "react";
import {
  validateLoginForm,
  classifyLoginError,
} from "../utils/loginValidation";
import type { FormErrors, LoginPayload } from "../types/index";

export const useLoginForm = () => {
  const [formData, setFormData] = useState<LoginPayload>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      if (errors[name] || errors.form) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
          form: "",
        }));
      }
    },
    [errors]
  );

  const validateForm = useCallback((): boolean => {
    const newErrors = validateLoginForm(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleLoginSuccess = useCallback(() => {
    setFormData({
      email: "",
      password: "",
    });
    setErrors({});
  }, []);

  const handleLoginError = useCallback((errorMessage: string) => {
    const errorField = classifyLoginError(errorMessage);

    if (errorField === "email") {
      setErrors({ email: errorMessage });
    } else if (errorField === "password") {
      setErrors({ password: errorMessage });
    } else {
      setErrors({ form: errorMessage });
    }
  }, []);


  return {
    formData,
    errors,
    handleInputChange,
    validateForm,
    handleLoginSuccess,
    handleLoginError,
  };
};
