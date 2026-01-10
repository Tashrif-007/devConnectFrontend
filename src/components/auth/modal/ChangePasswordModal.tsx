import React, { useState, useCallback } from "react";
import { Modal, InputField } from "../../ui";
import { AuthInputs } from "../../../layouts/AuthInputs";
import { useChangePassword } from "../../../hooks/useChangePassword";

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { changePassword, loading } = useChangePassword();
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.oldPassword) {
      newErrors.oldPassword = "Current password is required";
    }
    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    }
    if (formData.newPassword && formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    }
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (formData.oldPassword === formData.newPassword) {
      newErrors.newPassword =
        "New password must be different from current password";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    const result = await changePassword(formData);
    if (result.success) {
      setFormData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setErrors({});
      onClose();
    } else {
      const errorMessage = result.error!;
      setErrors({ form: errorMessage });
    }
  };

  const handleClose = () => {
    setFormData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      header="Change Password"
      showIcon={false}
      onClose={handleClose}
      buttons={[
        {
          label: "Cancel",
          onClick: handleClose,
          variant: "secondary",
        },
        {
          label: loading ? "Updating..." : "Update",
          onClick: handleSubmit,
          variant: "primary",
        },
      ]}
    >
      <AuthInputs>
        {errors.form && <div className="error-message">{errors.form}</div>}
        <InputField
          label="Current Password"
          name="oldPassword"
          type="password"
          placeholder="••••••••"
          onChange={handleInputChange}
          value={formData.oldPassword}
          error={errors.oldPassword || ""}
        />
        <InputField
          label="New Password"
          name="newPassword"
          type="password"
          placeholder="••••••••"
          onChange={handleInputChange}
          value={formData.newPassword}
          error={errors.newPassword || ""}
        />
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          onChange={handleInputChange}
          value={formData.confirmPassword}
          error={errors.confirmPassword || ""}
        />
      </AuthInputs>
    </Modal>
  );
};

export default ChangePasswordModal;
