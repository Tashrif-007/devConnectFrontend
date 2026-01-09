import { useState, useRef } from "react";
import { getStoredUser, saveStoredUser } from "../utils/storageUtils";
import type { User } from "../types";
import { userService } from "../services/userService";

export interface ProfileFormData {
  name?: string;
  bio?: string;
  image?: File;
}

export function useProfileForm(initialUser: User) {
  const [user, setUser] = useState<User>(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<ProfileFormData>({
    name: user.name || "",
    bio: user.bio || "",
    image: undefined,
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
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const handleSave = async () => {
    const payload = new FormData();
    if(formData.name) payload.append('name', formData.name);
    if(formData.bio) payload.append('bio', formData.bio);
    if(formData.image) payload.append('image', formData.image);

    const result = await userService.updateUser(payload);
    if (result.success) {
      const updatedUser: User = {
        ...user,
        name: result.data?.name || "",
        bio: result.data?.bio,
        profilePictureUrl: result.data?.profilePictureUrl || "",
      };

      setUser(updatedUser);
      const storedUser = getStoredUser();

      if (storedUser) {
        const updatedUserObj = {
          ...storedUser,
          name: result.data?.name || "",
          bio: result.data?.bio,
          profilePictureUrl: result.data?.profilePictureUrl || "",
        };
        saveStoredUser(updatedUserObj);
      }
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user.name,
      bio: user.bio || "",
      image: undefined,
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
