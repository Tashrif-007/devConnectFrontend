import React, { useState } from "react";
import { FiEdit, FiShare2 } from "react-icons/fi";
import { Button } from "../common";
import ChangePasswordModal from "../auth/ChangePasswordModal";

interface ActionButtonsProps {
  isEditing: boolean;
  isSaving?: boolean;
  onEdit: () => void;
  onShare: () => void;
  onSave: () => void;
  onCancel: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  isEditing,
  isSaving = false,
  onEdit,
  onShare,
  onSave,
  onCancel,
}) => {
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);

  if (isEditing) {
    return (
      <div className="grid grid-flow-col gap-3 justify-end">
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onSave} variant="secondary" disabled={isSaving}>
          Save Changes
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-flow-col grid-cols-2 gap-6 mt-6">
      <div>
        <Button onClick={onEdit} className="">
          <FiEdit />
          Edit Profile
        </Button>
      </div>
      <div>
        <Button onClick={onShare} variant="secondary">
          <FiShare2 /> Share
        </Button>
        <Button onClick={() => setIsChangePasswordOpen(true)}>
          Change Password
        </Button>
      </div>
      <ChangePasswordModal
        isOpen={isChangePasswordOpen}
        onClose={() => setIsChangePasswordOpen(false)}
      />
    </div>
  );
};

export default ActionButtons;
