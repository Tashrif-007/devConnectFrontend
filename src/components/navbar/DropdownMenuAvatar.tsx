import React from "react";

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
    <button
      className="flex items-center gap-2 focus:outline-none"
      onClick={onClick}
    >
      <div className="h-8 w-8 rounded-full bg-slate-200 border border-slate-200 overflow-hidden ring-2 ring-transparent transition-all">
        {profilePictureUrl ? (
          <img
            alt="User Avatar"
            className="h-full w-full object-cover"
            src={profilePictureUrl}
          />
        ) : (
          <span className="text-gray-600 text-xl font-bold">
            {userName.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
    </button>
  );
};

export default DropdownMenuAvatar;
