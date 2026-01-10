import React from "react";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import DropdownMenuButton from "./DropdownMenuButton";
import { ROUTES } from "../../constants";

interface ProfileDropdownMenuProps {
  onLogout: () => void;
}

const ProfileDropdownMenu: React.FC<ProfileDropdownMenuProps> = ({
  onLogout,
}) => {
  return (
    <div className="py-1">
      <DropdownMenuButton
        icon={<AiOutlineUser className="w-5 h-5" />}
        label="Profile"
        to={ROUTES.APP.PROFILE}
      />
      <div className="border-t border-slate-200 my-1"></div>
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
