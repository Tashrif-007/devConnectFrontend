import React from "react";
import Button from "../ui/Button";
import { FiTrash2 } from "react-icons/fi";
import type { User } from "../../types/auth";
import Options from "../ui/Options";
import { USER_ROLES } from "../../types";

interface UserActionCellProps {
  user: User;
  onRoleChange: (userId: string, newRole: USER_ROLES) => Promise<void>;
  onDeleteUser: (userId: string) => Promise<void>;
  isUpdating: boolean;
  isDeleting: boolean;
  error: string | null;
}

const UserActionCell: React.FC<UserActionCellProps> = ({
  user,
  onRoleChange,
  onDeleteUser,
  isUpdating,
  isDeleting,
  error,
}) => {
  return (
    <div className="flex items-center justify-end gap-2">
      {error && <span className="text-xs text-red-600 mr-2">{error}</span>}

      <Options
        value={user.role}
        onChange={(e) => onRoleChange(user.userId, e.target.value as USER_ROLES)}
        disabled={isUpdating}
        className="px-3 py-1.5 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      />
      <Button
        onClick={() => onDeleteUser(user.userId)}
        disabled={isDeleting || isUpdating}
        className={`p-2 rounded transition-colors ${
          isDeleting || isUpdating
            ? "text-red-400 bg-red-50 cursor-not-allowed"
            : "text-red-600 hover:bg-red-50"
        }`}
      >
        {isDeleting ? (
          <span className="text-xs">...</span>
        ) : (
          <FiTrash2 size={18} />
        )}
      </Button>
    </div>
  );
};

export default UserActionCell;
