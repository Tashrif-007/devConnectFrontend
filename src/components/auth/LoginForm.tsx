import React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../common/InputField";
import PasswordField from "../common/PasswordField";
import Button from "../common/Button";
import LoginSuccessModal from "./LoginSuccessModal";
import { useLogin } from "../../hooks/useLogin";
import { useAuth } from "../../hooks/useAuth";
import type { LoginFormData, FormErrors } from "../../types";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = React.useState<LoginFormData>({
    emailOrUsername: "",
    password: "",
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [showPassword, setShowPassword] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const { login, loading, error: loginError } = useLogin();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.emailOrUsername.trim()) {
      newErrors.emailOrUsername = "Email or username is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await login({
        emailOrUsername: formData.emailOrUsername,
        password: formData.password,
      });

      if (response.success && response.data) {
        setShowSuccessModal(true);
        setFormData({
          emailOrUsername: "",
          password: "",
        });
        setErrors({});
      }
    } catch (error) {
      const errorMessage =
        loginError || (error instanceof Error ? error.message : "Login failed");
      setErrors({ form: errorMessage });
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    navigate("/");
  };

  return (
    <form className="form-group-row" onSubmit={handleSubmit}>
      <InputField
        label="Email Address or Username"
        name="emailOrUsername"
        placeholder="user@example.com"
        value={formData.emailOrUsername}
        onChange={handleInputChange}
        error={errors.emailOrUsername}
      />

      <div className="login-password-group">
        <div className="login-password-header">
          <label htmlFor="password" className="form-label">
            Password
          </label>
        </div>
        <PasswordField
          label=""
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.password}
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
        />
      </div>

      {errors.form && <span className="form-error">{errors.form}</span>}

      <Button type="submit" disabled={loading}>
        {loading ? "Signing In..." : "Sign In"}
      </Button>

      <LoginSuccessModal
        isOpen={showSuccessModal}
        user={user}
        onClose={handleModalClose}
      />
    </form>
  );
};

export default LoginForm;
