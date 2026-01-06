import React from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "../../types";

interface DeveloperCardProps {
  developer: User;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({ developer }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${developer.userId}`);
  };

  return (
    <div className="flex items-center justify-between gap-3 pb-4 border-b border-gray-100 last:border-b-0">
      <button
        onClick={handleClick}
        className="flex items-center gap-3 flex-1 hover:opacity-75 transition-opacity text-left"
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 overflow-hidden">
          <img
            src={
              developer.profilePictureUrl ||
              "https://avatar.iran.liara.run/public"
            }
            alt={developer.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-gray-900 text-sm">
            {developer.name}
          </p>
          <p className="text-gray-500 text-xs truncate">
            @{developer.username}
          </p>
        </div>
      </button>
    </div>
  );
};

export default DeveloperCard;
