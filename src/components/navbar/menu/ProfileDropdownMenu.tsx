import React from "react";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import DropdownMenuButton from "./DropdownMenuButton";
import { ROUTES, getPublicProfileRoute } from "../../../constants";
import { useAuth } from "../../../hooks/useAuth";
import styles from "./ProfileDropdownMenu.module.css";

interface ProfileDropdownMenuProps {
  onLogout: () => void;
}

const ProfileDropdownMenu: React.FC<ProfileDropdownMenuProps> = ({
  onLogout,
}) => {
  const { user } = useAuth();
  const profileRoute = user?.userId
    ? getPublicProfileRoute(user.userId)
    : ROUTES.APP.PUBLIC_PROFILE;

  return (
    <div className={styles.container}>
      <DropdownMenuButton
        icon={<AiOutlineUser className="w-5 h-5" />}
        label="Profile"
        to={profileRoute}
      />
      <div className={styles.divider}></div>
      <DropdownMenuButton
        icon={<AiOutlineLogout className="w-5 h-5" />}
        label="Logout"
        onClick={onLogout}
        variant="danger"
      />
    </div>
  );
};

export default ProfileDropdownMenu;
