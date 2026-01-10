import React, { useState } from "react";
import { FiEdit, FiShare2 } from "react-icons/fi";
import { Button } from "../../ui";
import ChangePasswordModal from "../../auth/modal/ChangePasswordModal";
import styles from "./ActionButtons.module.css";

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
      <div className={styles.container}>
        <Button onClick={onCancel} className="button button-secondary">
          Cancel
        </Button>
        <Button
          onClick={onSave}
          className="button button-primary"
          disabled={isSaving}
        >
          Save Changes
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-flow-col grid-cols-2 gap-6 mt-6">
      <div className="mt-4">
        <Button onClick={onEdit} className="button button-primary">
          <FiEdit />
          Edit Profile
        </Button>
      </div>
      <div className="mt-4">
        <Button onClick={onShare} className="button button-secondary">
          <FiShare2 /> Share
        </Button>
        <Button
          onClick={() => setIsChangePasswordOpen(true)}
          className="button mt-4"
          variant="secondary"
        >
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
