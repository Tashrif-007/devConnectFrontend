import { useState, useRef } from "react";
import { getStoredUser, saveStoredUser } from "../utils/storageUtils";
import type { User } from "../types";

export interface ProfileFormData {
  name: string;
  bio: string;
  profilePictureUrl: string;
}

export function useProfileForm(initialUser: User) {
  const [user, setUser] = useState<User>(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<ProfileFormData>({
    name: user.name,
    bio: user.bio || "",
    profilePictureUrl: user.profilePictureUrl || "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setFormData((prev) => ({
          ...prev,
          profilePictureUrl: imageUrl,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updatedUser: User = {
      ...user,
      name: formData.name,
      bio: formData.bio,
      profilePictureUrl: formData.profilePictureUrl,
    };

    setUser(updatedUser);
    const storedUser = getStoredUser();

    if (storedUser) {
      const updatedUserObj = {
        ...storedUser,
        name: formData.name,
        bio: formData.bio,
        profilePictureUrl: formData.profilePictureUrl,
      };
      saveStoredUser(updatedUserObj);
    }

    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user.name,
      bio: user.bio || "",
      profilePictureUrl: user.profilePictureUrl || "",
    });
    setIsEditing(false);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return {
    user,
    setUser,
    isEditing,
    setIsEditing,
    toggleEditMode,
    formData,
    setFormData,
    handleInputChange,
    handleImageUpload,
    handleSave,
    handleCancel,
    fileInputRef,
  };
}
