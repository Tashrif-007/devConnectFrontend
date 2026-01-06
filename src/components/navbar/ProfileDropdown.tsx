import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import DropdownMenuAvatar from "./DropdownMenuAvatar";
import ProfileDropdownMenu from "./ProfileDropdownMenu";

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
    <div className="relative">
      <DropdownMenuAvatar
        profilePictureUrl={user?.profilePictureUrl || 'https://avatar.iran.liara.run/public'}
        userName={user?.name || "User"}
        onClick={onToggle}
      />
      {isOpen && (
        <>
          <div className="fixed inset-0 z-30" onClick={onToggle}></div>
          <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-xl bg-white border border-slate-200 shadow-lg ring-1 ring-black ring-opacity-5 z-50">
            <ProfileDropdownMenu onLogout={handleLogout} />
          </div>
        </>
      )}
    </div>
  );
}
