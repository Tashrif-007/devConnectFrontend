import React from "react";
import { avatarUrl } from "../../constants";

interface ProfilePictureProps {
  name: string;
  imageUrl: string | null;
  isEditing: boolean;
  fileInputRef:
    | React.RefObject<HTMLInputElement>
    | React.MutableRefObject<HTMLInputElement | null>;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUploadClick: () => void;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  name,
  imageUrl,
  isEditing,
  fileInputRef,
  onImageUpload,
  onUploadClick,
}) => {
  return (
    <div className="relative group">
        <img
          src={imageUrl || `${avatarUrl}?seed=${name}`}
          alt={name}
          className="w-32 h-32 rounded-full shadow-2xl object-contain"
        />
      {isEditing && (
        <>
          <button
            onClick={onUploadClick}
            className="absolute bottom-0 right-0 bg-gray-900 text-white rounded-full p-2 shadow-lg hover:bg-gray-800 transition-colors"
            title="Upload profile picture"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={onImageUpload}
            className="hidden"
          />
        </>
      )}
    </div>
  );
};

export default ProfilePicture;
