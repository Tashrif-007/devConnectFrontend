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
    <div className={styles['snackbar-container']}>
      <div className={styles['snackbar-layout']}>
        <Paragraph className={styles['snackbar-paragraph']}>{message}</Paragraph>
        <Button onClick={onClose}>
          <IoClose size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Snackbar;
