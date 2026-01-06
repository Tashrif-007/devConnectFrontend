import React, { type ReactNode } from "react";
import { Header } from "./Header";
import Button from "./Button";

export interface ModalButton {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

interface GenericModalProps {
  isOpen: boolean;
  header: string;
  message?: string;
  children?: ReactNode;
  buttons?: ModalButton[];
  onClose: () => void;
  showIcon?: boolean;
  icon?: string;
}

const Modal: React.FC<GenericModalProps> = ({
  isOpen,
  header,
  message,
  children,
  showIcon = true,
  icon = "✓",
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {showIcon && <div className="modal-icon">{icon}</div>}
        <Header
          level={2}
          value={header}
          className="text-xl font-bold text-gray-900 mb-2"
        />
        {message && <p className="modal-message">{message}</p>}
        {children && <div className="modal-body">{children}</div>}
      </div>
    </div>
  );
};

export default Modal;
