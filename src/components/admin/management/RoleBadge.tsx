import React from "react";
import { ROLE_COLORS } from "../../../constants";
import styles from "./RoleBadge.module.css";

interface RoleBadgeProps {
  role: "ADMIN" | "USER";
}

const RoleBadge: React.FC<RoleBadgeProps> = ({ role }) => {
  const colors = ROLE_COLORS[role as keyof typeof ROLE_COLORS];

  return (
    <span className={`${styles.badge} ${colors.bg} ${colors.text}`}>
      {role}
    </span>
  );
};

export default RoleBadge;
