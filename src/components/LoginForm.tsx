import React from "react";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import Button from "./Button";
import LoginSuccessModal from "./LoginSuccessModal";
import { useLogin } from "../hooks/useLogin";
import type { LoginFormData, FormErrors, LoginUser } from "../types";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = React.useState<LoginFormData>({
    emailOrUsername: "",
    password: "",
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [showPassword, setShowPassword] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [loginUser, setLoginUser] = React.useState<LoginUser | null>(null);
  const { login, loading, error: loginError } = useLogin();

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
        setLoginUser(response.data.user);
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
        user={loginUser}
        onClose={() => setShowSuccessModal(false)}
      />
    </form>
  );
};

export default LoginForm;
