import React, { useState } from "react";
import { Button, InputField, Modal } from "../ui";
import { AuthInputs } from "../../layouts/AuthInputs";
import { useSignupForm } from "../../hooks/useSignupForm";
import { useSignup } from "../../hooks/useSignup";

const SignupForm = () => {
  const { signup, loading } = useSignup();
  const {
    formData,
    errors,
    handleInputChange,
    validateForm,
    handleSignupSuccess,
    handleSignupError,
  } = useSignupForm();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const result = await signup(formData);
    if (result.success) {
      setSuccessMessage("Please Check your inbox to verify your email!");
      setShowSuccessModal(true);
      handleSignupSuccess();
    } else {
      handleSignupError(result.error!);
    }
  };
  return (
    <div className="w-full max-w-md mt-6">
      <form onSubmit={handleSubmit}>
        <AuthInputs>
          <InputField
            label="Email"
            name="email"
            placeholder="user@example.com"
            onChange={handleInputChange}
            value={formData.email}
            error={errors.email || ""}
          ></InputField>
          <InputField
            label="Username"
            name="username"
            placeholder="Alex"
            onChange={handleInputChange}
            value={formData.username}
            error={errors.username || ""}
          ></InputField>
          <InputField
            label="Full Name"
            name="name"
            placeholder="user"
            onChange={handleInputChange}
            value={formData.name}
            error={errors.name || ""}
          ></InputField>
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            onChange={handleInputChange}
            value={formData.password}
            error={errors.password || ""}
          ></InputField>
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            onChange={handleInputChange}
            value={formData.confirmPassword}
            error={errors.confirmPassword || ""}
          ></InputField>
        </AuthInputs>
        <Button
          className="w-full button button-primary"
          type="submit"
          disabled={loading}
        >
          {loading ? "Creating Account" : "Create Account"}
        </Button>
      </form>
      <Modal
        isOpen={showSuccessModal}
        header="Success!"
        message={successMessage}
        onClose={() => setShowSuccessModal(false)}
        buttons={[
          {
            label: "Close",
            onClick: () => setShowSuccessModal(false),
            variant: "primary",
          },
        ]}
      />
    </div>
  );
};

export default SignupForm;
