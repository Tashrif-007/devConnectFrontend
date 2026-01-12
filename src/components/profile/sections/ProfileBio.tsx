import React from "react";
import styles from "./ProfileBio.module.css";

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
      <div className={styles.editContainer}>
        <label className={styles.label}>Bio</label>
        <textarea
          name="bio"
          value={bioValue}
          onChange={onBioChange}
          placeholder="Tell us about yourself..."
          rows={4}
          className={styles.textarea}
        />
      </div>
    );
  }

  if (bio) {
    return (
      <div className={styles.displayContainer}>
        <p className={styles.bioText}>{bio}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <p className={styles.emptyText}>No bio added yet</p>
    </div>
  );
};

export default ProfileBio;
