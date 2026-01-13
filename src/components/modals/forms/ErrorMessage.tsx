import React from "react";
import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
