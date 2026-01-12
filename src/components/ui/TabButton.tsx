import React from "react";
import Button from "./Button";
import styles from "./TabButton.module.css";

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
    className = `${styles["tab-button-search"]} ${
      isActive
        ? styles["tab-button-search-active"]
        : styles["tab-button-search-inactive"]
    }`;
  } else if (variant === "admin") {
    className = `${styles["tab-button-admin"]} ${
      isActive
        ? styles["tab-button-admin-active"]
        : styles["tab-button-admin-inactive"]
    }`;
  } else if (variant === "content") {
    className = `${styles["tab-button-content"]} ${
      isActive
        ? styles["tab-button-content-active"]
        : styles["tab-button-content-inactive"]
    }`;
  }

  return (
    <Button onClick={onClick} className={className}>
      {label}
      {count !== undefined && (
        <span className={styles["tab-button-count-badge"]}>{count}</span>
      )}
      {variant === "search" && isActive && (
        <div className={styles["tab-button-search-underline"]}></div>
      )}
    </Button>
  );
};

export default TabButton;
