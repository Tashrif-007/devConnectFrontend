import React from "react";
import { ROLE_COLORS } from "../../constants/index";

interface RoleBadgeProps {
  role: "ADMIN" | "USER";
}

const RoleBadge: React.FC<RoleBadgeProps> = ({ role }) => {
  const colors = ROLE_COLORS[role as keyof typeof ROLE_COLORS];

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}
    >
      {role}
    </span>
  );
};

export default RoleBadge;
