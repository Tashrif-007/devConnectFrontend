import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import DropdownMenuAvatar from "./DropdownMenuAvatar";
import { UI_CONFIG } from "../../../constants";
import ProfileDropdownMenu from "./ProfileDropdownMenu";
import styles from "./ProfileDropdown.module.css";

interface ProfileDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function ProfileDropdown({
  isOpen,
  onToggle,
}: ProfileDropdownProps) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    onToggle();
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <DropdownMenuAvatar
        profilePictureUrl={
          user?.profilePictureUrl ||
          `${UI_CONFIG.AVATAR_URL}?seed=${user?.name}`
        }
        userName={user?.name || "User"}
        onClick={onToggle}
      />
      {isOpen && (
        <>
          <div className={styles.backdrop} onClick={onToggle}></div>
          <div className={styles.menu}>
            <ProfileDropdownMenu onLogout={handleLogout} />
          </div>
        </>
      )}
    </div>
  );
}
