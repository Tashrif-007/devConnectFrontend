import React from "react";
import ConfirmModal from "../modals/ConfirmModal";

interface DeleteCategoryConfirmationProps {
  isOpen: boolean;
  categoryId: string | null;
  isLoading: boolean;
  onConfirm: (categoryId: string) => Promise<void>;
  onCancel: () => void;
}

const DeleteCategoryConfirmation: React.FC<DeleteCategoryConfirmationProps> = ({
  isOpen,
  categoryId,
  isLoading,
  onConfirm,
  onCancel,
}) => {
  return (
    <ConfirmModal
      isOpen={isOpen}
      title="Delete Category"
      message="Are you sure you want to delete this category? This action cannot be undone."
      confirmText="Delete"
      cancelText="Cancel"
      isLoading={isLoading}
      onConfirm={() => {
        if (categoryId) {
          onConfirm(categoryId);
        }
      }}
      onCancel={onCancel}
    />
  );
};

export default DeleteCategoryConfirmation;
