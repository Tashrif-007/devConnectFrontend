import React, { useState } from "react";
import Button from "../common/Button";
import SuccessModal from "./SuccessModal";
import SignupFormFields from "./SignupFormFields";
import { useSignup } from "../../hooks/useSignup";
import { useSignupForm } from "../../hooks/useSignupForm";

const SignupForm: React.FC = () => {
  const { signup, loading: apiLoading, error: hookError } = useSignup();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    formData,
    errors,
    showPassword,
    showConfirmPassword,
    handleInputChange,
    validateForm,
    handleSignupSuccess,
    handleSignupError,
    setShowPassword,
    setShowConfirmPassword,
  } = useSignupForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const result = await signup(formData);

    if (result.success) {
      setSuccessMessage(`Please Check your inbox to verify your email!`);
      setShowSuccessModal(true);
      handleSignupSuccess();
    } else {
      handleSignupError(hookError);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <form className="form-group-row" onSubmit={handleSubmit}>
        <SignupFormFields
          formData={formData}
          errors={errors}
          showPassword={showPassword}
          showConfirmPassword={showConfirmPassword}
          onInputChange={handleInputChange}
          onTogglePassword={() => setShowPassword(!showPassword)}
          onToggleConfirmPassword={() =>
            setShowConfirmPassword(!showConfirmPassword)
          }
        />

        {errors.form && <span className="form-error">{errors.form}</span>}

        <Button type="submit" disabled={apiLoading}>
          {apiLoading ? "Creating Account..." : "Create Account →"}
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
