import React from "react";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { Paragraph } from "./Paragraph";
import styles from './Snackbar.module.css';

interface SnackbarProps {
  message: string | null;
  onClose?: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slideIn">
      <div className="bg-black text-white rounded-lg shadow-lg p-4 flex items-center gap-2">
        <Paragraph className="text-sm font-medium flex-1">{message}</Paragraph>
        <Button onClick={onClose}>
          <IoClose size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Snackbar;
