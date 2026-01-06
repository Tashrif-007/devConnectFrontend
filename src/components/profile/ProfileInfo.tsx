import React from "react";
import type { User } from "../../types";
import { useProfileForm } from "../../hooks/useProfileForm";
import ProfileHeader from "./ProfileHeader";
import ProfilePicture from "./ProfilePicture";
import ProfileBasicInfo from "./ProfileBasicInfo";
import ActionButtons from "./ActionButtons";
import ProfileBio from "./ProfileBio";
import ProfileDetails from "./ProfileDetails";

interface ProfileInfoProps {
  user: User;
  isPublicProfile?: boolean;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  user: initialUser,
  isPublicProfile = false,
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
      <div className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden mb-8">
        <ProfileHeader />
        <div className="px-6 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between -mt-6 mb-6 gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
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
                nameValue={formData.name}
                onNameChange={handleInputChange}
              />
            </div>
            {!isPublicProfile && (
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
            bioValue={formData.bio}
            onBioChange={handleInputChange}
          />
          <ProfileDetails email={user.email} joinDate={user.joinDate} />
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
