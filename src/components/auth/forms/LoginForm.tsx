import type React from "react";
import { useLoginForm } from "../../../hooks/useLoginForm";
import { Button, InputField } from "../../ui";
import { AuthInputs } from "../../../layouts/AuthInputs";
import { useLogin } from "../../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const {
    formData,
    errors,
    handleInputChange,
    handleLoginError,
    handleLoginSuccess,
    validateForm,
  } = useLoginForm();
  const { login, loading } = useLogin();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const result = await login(formData);
    if (result.success) {
      navigate("/");
      handleLoginSuccess();
    } else {
      handleLoginError(result.error!);
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <AuthInputs>
          <InputField
            label="Email"
            name="email"
            placeholder="user@example.com"
            onChange={handleInputChange}
            value={formData.email || ""}
            error={errors.email || ""}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            onChange={handleInputChange}
            value={formData.password || ""}
            error={errors.password || ""}
          />
          <Button className={styles.submitButton} type="submit">
            {loading ? "Loggin in..." : "Login"}
          </Button>
        </AuthInputs>
      </form>
    </div>
  );
};

export default LoginForm;
