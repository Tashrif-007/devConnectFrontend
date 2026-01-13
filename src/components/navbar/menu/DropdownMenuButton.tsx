import React from "react";
import { Link } from "react-router-dom";

interface DropdownMenuButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  to?: string;
  variant?: "default" | "danger";
  className?: string;
}

const DropdownMenuButton: React.FC<DropdownMenuButtonProps> = ({
  icon,
  label,
  onClick,
  to,
  variant = "default",
  className = "",
}) => {
  const baseStyles =
    "flex items-center gap-3 px-4 py-2 text-sm transition-colors w-full text-left";

  const variantStyles = {
    default: "text-slate-700 hover:bg-slate-50 hover:text-primary",
    danger: "text-slate-600 hover:bg-slate-50 hover:text-red-600",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link className={combinedClassName} to={to}>
        <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      {label}
    </button>
  );
};

export default DropdownMenuButton;
