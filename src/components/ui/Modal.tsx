import React, { type ReactNode } from "react";
import { Header } from "./Header";
import styles from "./Modal.module.css";
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
  buttons,
  showIcon = true,
  icon = "✓",
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {showIcon && <div className="modal-icon">{icon}</div>}
        <Header level={2} value={header} className={styles["modal-header"]} />
        {message && <p className="modal-message">{message}</p>}
        {children && <div className="modal-body">{children}</div>}
        {buttons && buttons.length > 0 && (
          <div className="modal-buttons">
            {buttons.map((button, index) => (
              <Button
                key={index}
                onClick={button.onClick}
                className={`modal-button modal-button-${
                  button.variant || "primary"
                }`}
              >
                {button.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
