import React from "react";

const ProfileHeader: React.FC = () => {
  return (
    <div className="h-32 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12"></div>
    </div>
  );
};

export default ProfileHeader;
