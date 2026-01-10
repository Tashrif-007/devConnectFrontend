import React from "react";
import InputField from "../../ui/InputField";
import styles from "./ProfileBasicInfo.module.css";

interface ProfileBasicInfoProps {
  name: string;
  username: string;
  isEditing: boolean;
  nameValue: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileBasicInfo: React.FC<ProfileBasicInfoProps> = ({
  name,
  username,
  isEditing,
  nameValue,
  onNameChange,
}) => {
  return (
    <div>
      {isEditing ? (
        <InputField
          label="Name"
          name="name"
          value={nameValue}
          onChange={onNameChange}
          type="text"
        />
      ) : (
        <h1 className={styles.name}>{name}</h1>
      )}
      <p className={styles.username}>@{username}</p>
    </div>
  );
};

export default ProfileBasicInfo;
