import React from "react";
import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
      <p className="text-sm text-red-700">{message}</p>
    </div>
  );
};

export default ErrorMessage;
