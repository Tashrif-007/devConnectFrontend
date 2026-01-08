import React from "react";
import { Button } from "./Button";
import "../../styles/tabButton.css";

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  variant?: "search" | "admin" | "content";
  count?: number;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  isActive,
  onClick,
  variant = "search",
  count,
}) => {
  let className = "";

  if (variant === "search") {
    className = `tab-button-search ${
      isActive ? "tab-button-search-active" : "tab-button-search-inactive"
    }`;
  } else if (variant === "admin") {
    className = `tab-button-admin ${
      isActive ? "tab-button-admin-active" : "tab-button-admin-inactive"
    }`;
  } else if (variant === "content") {
    className = `tab-button-content ${
      isActive ? "tab-button-content-active" : "tab-button-content-inactive"
    }`;
  }

  return (
    <Button onClick={onClick} className={className}>
      {label}
      {count !== undefined && (
        <span className="tab-button-count-badge">{count}</span>
      )}
      {variant === "search" && isActive && (
        <div className="tab-button-search-underline"></div>
      )}
    </Button>
  );
};

export default TabButton;
