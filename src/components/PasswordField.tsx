import React from "react";

interface PasswordFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  showPassword: boolean;
  onTogglePassword: () => void;
  showStrength?: boolean;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  name,
  placeholder = "••••••••",
  value,
  onChange,
  error,
  showPassword,
  onTogglePassword,
  showStrength = false,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <div className="password-field">
        <input
          id={name}
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`form-input ${error ? "error" : ""}`}
        />
        <button
          type="button"
          onClick={onTogglePassword}
          className="password-toggle"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </button>
      </div>
      {showStrength && value && (
        <div className="password-strength">
          <div className="strength-bar"></div>
          <div className="strength-bar"></div>
          <div className="strength-bar empty"></div>
          <div className="strength-bar empty"></div>
          <span className="strength-label">Medium</span>
        </div>
      )}
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};

export default PasswordField;
