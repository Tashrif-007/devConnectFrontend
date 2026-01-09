import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Button from "./Button";

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
      <label className="block text-sm font-semibold text-gray-900 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pr-10 px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent transition-all ${
            error ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
          }`}
        />
        {isPassword && (
          <Button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {!showPassword ? <FiEyeOff /> : <FiEye />}
          </Button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
