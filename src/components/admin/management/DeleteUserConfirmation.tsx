import React from "react";
import ConfirmModal from "../../modals/confirm/ConfirmModal";

interface DeleteUserConfirmationProps {
  isOpen: boolean;
  userId: string | null;
  isLoading: boolean;
  onConfirm: (userId: string) => Promise<void>;
  onCancel: () => void;
}

const DeleteUserConfirmation: React.FC<DeleteUserConfirmationProps> = ({
  isOpen,
  userId,
  isLoading,
  onConfirm,
  onCancel,
}) => {
  return (
    <ConfirmModal
      isOpen={isOpen}
      title="Delete User"
      message="Are you sure you want to delete this user? This action cannot be undone."
      confirmText="Delete"
      cancelText="Cancel"
      isLoading={isLoading}
      onConfirm={() => {
        if (userId) {
          onConfirm(userId);
        }
      }}
      onCancel={onCancel}
    />
  );
};

export default DeleteUserConfirmation;
