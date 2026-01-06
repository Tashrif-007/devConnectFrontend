import React from "react";
import Button from "../common/Button";
import { FiTrash2 } from "react-icons/fi";
import type { User } from "../../services/userService";
import { USER_ROLES } from "../../constants/adminConstants";

interface UserActionCellProps {
  user: User;
  onPromoteAdmin: (userId: string) => Promise<void>;
  onDemoteUser: (userId: string) => Promise<void>;
  onDeleteUser: (userId: string) => Promise<void>;
  isUpdating: boolean;
  isDeleting: boolean;
  error: string | null;
}

const UserActionCell: React.FC<UserActionCellProps> = ({
  user,
  onPromoteAdmin,
  onDemoteUser,
  onDeleteUser,
  isUpdating,
  isDeleting,
  error,
}) => {
  return (
    <div className="flex items-center justify-end gap-2">
      {error && <span className="text-xs text-red-600 mr-2">{error}</span>}

      {user.role === USER_ROLES.USER ? (
        <Button
          variant="secondary"
          onClick={() => onPromoteAdmin(user.userId)}
          disabled={isUpdating}
          className="px-3 py-1 text-xs button"
        >
          {isUpdating ? "Promoting..." : "Promote to Admin"}
        </Button>
      ) : (
        <Button
          variant="secondary"
          onClick={() => onDemoteUser(user.userId)}
          disabled={isUpdating}
          className="px-3 py-1 text-xs button"
        >
          {isUpdating ? "Demoting..." : "Demote to User"}
        </Button>
      )}

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
