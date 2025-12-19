import React from "react";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import Button from "./Button";
import SuccessModal from "./SuccessModal";
import { validateForm as validateFormUtil } from "../utils/validation";
import { useSignup } from "../hooks/useSignup";
import type { FormErrors, FormData } from "../types/index";

const SignupForm: React.FC = () => {
  const { signup, loading: apiLoading } = useSignup();
  const [formData, setFormData] = React.useState<FormData>({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateFormUtil(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await signup(formData);
      setSuccessMessage(
        `Welcome ${response.data.name}! You have successfully signed up.`
      );
      setShowSuccessModal(true);
      setFormData({
        username: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Signup failed. Please try again.";
      setErrors({ form: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <form className="form-group-row" onSubmit={handleSubmit}>
        <InputField
          label="Username"
          name="username"
          placeholder="alexdev"
          value={formData.username}
          onChange={handleInputChange}
          error={errors.username}
        />

        <InputField
          label="Full Name"
          name="name"
          placeholder="Alex Developer"
          value={formData.name}
          onChange={handleInputChange}
          error={errors.name}
        />

        <InputField
          label="Email Address"
          type="email"
          name="email"
          placeholder="dev@example.com"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
        />

        <PasswordField
          label="Password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.password}
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
          showStrength={true}
        />

        <PasswordField
          label="Confirm Password"
          name="confirmPassword"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          error={errors.confirmPassword}
          showPassword={showConfirmPassword}
          onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
        />

        {errors.form && <span className="form-error">{errors.form}</span>}

        <Button type="submit" disabled={loading || apiLoading}>
          {loading || apiLoading ? "Creating Account..." : "Create Account →"}
        </Button>
      </form>

      <SuccessModal
        isOpen={showSuccessModal}
        message={successMessage}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default SignupForm;
