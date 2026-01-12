import React from "react";
import Button from "../../ui/Button";
import { FiTrash2 } from "react-icons/fi";
import Options from "../../ui/Options";
import { USER_ROLES, type User } from "../../../types";
import styles from "./UserActionCell.module.css";

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
    <div className={styles.container}>
      {error && <span className={styles.errorText}>{error}</span>}

      <Options
        value={user.role}
        onChange={(e) =>
          onRoleChange(user.userId, e.target.value as USER_ROLES)
        }
        disabled={isUpdating}
        className={styles.roleSelect}
      />
      <Button
        onClick={() => onDeleteUser(user.userId)}
        disabled={isDeleting || isUpdating}
        className={
          isDeleting || isUpdating
            ? styles.deleteButtonLoading
            : styles.deleteButton
        }
      >
        {isDeleting ? (
          <span className={styles.loadingIndicator}>...</span>
        ) : (
          <FiTrash2 size={18} />
        )}
      </Button>
    </div>
  );
};

export default UserActionCell;
