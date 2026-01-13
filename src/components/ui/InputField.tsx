import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Button from "./Button";
import styles from './InputField.module.css'
interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  placeholder = "",
  value,
  onChange,
  error,
}) => {
  const isPassword = type === "password";
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mb-4">
      <label className={styles['input-label']}>
        {label}
      </label>
      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${styles['input-fields']} ${
            error ? styles['input-fields-error'] : styles['input-fields-no-error']
          }`}
        />
        {isPassword && (
          <Button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className={styles['input-fields-button']}
          >
            {!showPassword ? <FiEyeOff /> : <FiEye />}
          </Button>
        )}
      </div>
      {error && <p className={styles['input-fields-error-message']}>{error}</p>}
    </div>
  );
};

export default InputField;
