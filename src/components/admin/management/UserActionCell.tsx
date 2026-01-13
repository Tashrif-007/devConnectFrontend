import React, { useState } from "react";
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
  const [selectValue, setSelectValue] = useState(user.role);

  const handleSelectChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;

    if (value === "DELETE") {
      await onDeleteUser(user.userId);
      setSelectValue(user.role);
    } else {
      setSelectValue(value);
      await onRoleChange(user.userId, value as USER_ROLES);
    }
  };

  return (
    <div className={styles.container}>
      {error && <span className={styles.errorText}>{error}</span>}

      <select
        value={selectValue}
        onChange={handleSelectChange}
        disabled={isUpdating || isDeleting}
        className={styles.roleSelect}
      >
        {Object.entries(USER_ROLES).map(([key, value]) => (
          <option key={key} value={value}>
            {key.charAt(0) + key.slice(1).toLowerCase()}
          </option>
        ))}
        <option value="DELETE" className={styles.deleteOption}>
          Delete User
        </option>
      </select>

      <Button
        onClick={() => onDeleteUser(user.userId)}
        disabled={isDeleting || isUpdating}
        className={`${styles.deleteButton} ${styles.desktopOnly}`}
        title="Delete user"
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
