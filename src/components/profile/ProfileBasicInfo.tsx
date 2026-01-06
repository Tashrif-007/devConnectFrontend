import React from "react";
import InputField from "../common/InputField";

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
        <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
      )}
      <p className="text-gray-600">@{username}</p>
    </div>
  );
};

export default ProfileBasicInfo;
