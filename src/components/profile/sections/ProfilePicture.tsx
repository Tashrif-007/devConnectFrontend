import React from "react";
import { UI_CONFIG } from "../../../constants";
import styles from "./ProfilePicture.module.css";

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
    <div className={styles.container}>
      <img
        src={imageUrl || `${UI_CONFIG.AVATAR_URL}?seed=${name}`}
        alt={name}
        className={styles.avatar}
      />
      {isEditing && (
        <>
          <button
            onClick={onUploadClick}
            className={styles.uploadButton}
            title="Upload profile picture"
          >
            <svg
              className={styles.uploadIcon}
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
