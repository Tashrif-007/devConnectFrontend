import React from "react";

interface ProfileBioProps {
  bio: string;
  isEditing: boolean;
  bioValue: string;
  onBioChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ProfileBio: React.FC<ProfileBioProps> = ({
  bio,
  isEditing,
  bioValue,
  onBioChange,
}) => {
  if (isEditing) {
    return (
      <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Bio
        </label>
        <textarea
          name="bio"
          value={bioValue}
          onChange={onBioChange}
          placeholder="Tell us about yourself..."
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
        />
      </div>
    );
  }

  if (bio) {
    return (
      <div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-900">
        <p className="text-gray-700 leading-relaxed">{bio}</p>
      </div>
    );
  }

  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-gray-400 italic">No bio added yet</p>
    </div>
  );
};

export default ProfileBio;
