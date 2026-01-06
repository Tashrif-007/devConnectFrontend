import React from "react";
import { formatProfileDate } from "../../utils/dateFormatter";

interface ProfileDetailsProps {
  email: string;
  joinDate: string | Date;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ email, joinDate }) => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Email
        </label>
        <p className="text-gray-900 font-medium break-all">{email}</p>
      </div>
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Joined
        </label>
        <p className="text-gray-900 font-medium">{formatProfileDate(joinDate)}</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
