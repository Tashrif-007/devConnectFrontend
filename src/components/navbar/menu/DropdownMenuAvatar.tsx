import React from "react";
import styles from "./DropdownMenuAvatar.module.css";

interface DropdownMenuAvatarProps {
  profilePictureUrl?: string;
  userName: string;
  onClick: () => void;
}

const DropdownMenuAvatar: React.FC<DropdownMenuAvatarProps> = ({
  profilePictureUrl,
  userName,
  onClick,
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.avatar}>
        {profilePictureUrl ? (
          <img
            alt="User Avatar"
            className={styles.avatarImage}
            src={profilePictureUrl}
          />
        ) : (
          <span className={styles.avatarInitial}>
            {userName.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
    </button>
  );
};

export default DropdownMenuAvatar;
