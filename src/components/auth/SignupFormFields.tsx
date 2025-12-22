import React from "react";
import InputField from "../common/InputField";
import PasswordField from "../common/PasswordField";
import type { FormData, FormErrors } from "../../types/index";

interface SignupFormFieldsProps {
  formData: FormData;
  errors: FormErrors;
  showPassword: boolean;
  showConfirmPassword: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTogglePassword: () => void;
  onToggleConfirmPassword: () => void;
}

const SignupFormFields: React.FC<SignupFormFieldsProps> = ({
  formData,
  errors,
  showPassword,
  showConfirmPassword,
  onInputChange,
  onTogglePassword,
  onToggleConfirmPassword,
}) => {
  return (
    <>
      <InputField
        label="Username"
        name="username"
        placeholder="alexdev"
        value={formData.username}
        onChange={onInputChange}
        error={errors.username}
      />

      <InputField
        label="Full Name"
        name="name"
        placeholder="Alex Developer"
        value={formData.name}
        onChange={onInputChange}
        error={errors.name}
      />

      <InputField
        label="Email Address"
        type="email"
        name="email"
        placeholder="dev@example.com"
        value={formData.email}
        onChange={onInputChange}
        error={errors.email}
      />

      <PasswordField
        label="Password"
        name="password"
        placeholder="••••••••"
        value={formData.password}
        onChange={onInputChange}
        error={errors.password}
        showPassword={showPassword}
        onTogglePassword={onTogglePassword}
      />

      <PasswordField
        label="Confirm Password"
        name="confirmPassword"
        placeholder="••••••••"
        value={formData.confirmPassword}
        onChange={onInputChange}
        error={errors.confirmPassword}
        showPassword={showConfirmPassword}
        onTogglePassword={onToggleConfirmPassword}
      />
    </>
  );
};

export default SignupFormFields;
