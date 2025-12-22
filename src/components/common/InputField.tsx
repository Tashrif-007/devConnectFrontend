import React from "react";

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
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <div className="form-input-wrapper">
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`form-input ${error ? "error" : ""}`}
        />
      </div>
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};

export default InputField;
