import React from "react";
import type { User } from "../../../types";
import { useProfileForm } from "../../../hooks/useProfileForm";
import ProfileHeader from "../sections/ProfileHeader";
import ProfilePicture from "../sections/ProfilePicture";
import ProfileBasicInfo from "../sections/ProfileBasicInfo";
import ActionButtons from "./ActionButtons";
import ProfileBio from "../sections/ProfileBio";
import ProfileDetails from "../sections/ProfileDetails";
import styles from "./ProfileInfo.module.css";

interface ProfileInfoProps {
  user: User;
  isOwnProfile?: boolean;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  user: initialUser,
  isOwnProfile = false,
}) => {
  const {
    user,
    isEditing,
    setIsEditing,
    formData,
    handleInputChange,
    handleImageUpload,
    handleSave,
    handleCancel,
    fileInputRef,
  } = useProfileForm(initialUser);
  const handleShare = () => {
    const profileUrl = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: `${user.name}'s Profile`,
        text: `Check out ${user.name}'s profile on devConnect!`,
        url: profileUrl,
      });
    } else {
      navigator.clipboard.writeText(profileUrl);
      alert("Profile link copied to clipboard!");
    }
  };
  return (
    <>
      <div className={styles.card}>
        <ProfileHeader />
        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            <div className={styles.leftSection}>
              <ProfilePicture
                name={user.name}
                imageUrl={user.profilePictureUrl}
                isEditing={isEditing}
                fileInputRef={fileInputRef}
                onImageUpload={handleImageUpload}
                onUploadClick={() => fileInputRef.current?.click()}
              />
              <ProfileBasicInfo
                name={user.name}
                username={user.username}
                isEditing={isEditing}
                nameValue={formData.name!}
                onNameChange={handleInputChange}
              />
            </div>
            {isOwnProfile && (
              <ActionButtons
                isEditing={isEditing}
                onEdit={() => setIsEditing(true)}
                onShare={handleShare}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            )}
          </div>
          <ProfileBio
            bio={user.bio || ""}
            isEditing={isEditing}
            bioValue={formData.bio!}
            onBioChange={handleInputChange}
          />
          <ProfileDetails email={user.email} joinDate={user.joinDate} />
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
