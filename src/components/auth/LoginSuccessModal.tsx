import React from "react";
import type { LoginUser } from "../types";

interface LoginSuccessModalProps {
  isOpen: boolean;
  user: LoginUser | null;
  onClose: () => void;
}

const LoginSuccessModal: React.FC<LoginSuccessModalProps> = ({
  isOpen,
  user,
  onClose,
}) => {
  if (!isOpen || !user) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-icon">✓</div>
        <h2 className="modal-title">Welcome Back!</h2>
        <div className="modal-user-details">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
          <p>
            <strong>Email Confirmed:</strong>{" "}
            {user.isEmailConfirmed ? "Yes" : "No"}
          </p>
        </div>
        <button onClick={onClose} className="modal-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginSuccessModal;
