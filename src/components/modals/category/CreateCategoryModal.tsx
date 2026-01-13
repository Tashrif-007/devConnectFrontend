import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import InputField from "../../ui/InputField";
import styles from "./CreateCategoryModal.module.css";

interface CreateCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; description?: string }) => Promise<void>;
  isLoading: boolean;
  error?: string | null;
}

const CreateCategoryModal: React.FC<CreateCategoryModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading,
  error,
}) => {
  const [formData, setFormData] = useState({ name: "", description: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      return;
    }
    await onSubmit({
      name: formData.name.trim(),
      description: formData.description.trim() || undefined,
    });
    setFormData({ name: "", description: "" });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Create New Category</h2>
          <button
            onClick={onClose}
            disabled={isLoading}
            className={styles.closeButton}
          >
            <FiX size={24} className={styles.closeIcon} />
          </button>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <InputField
            label="Category Name *"
            name="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g., React, DevOps, UI Design"
          />

          <div>
            <label className={styles.descriptionLabel}>
              Description (Optional)
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              disabled={isLoading}
              placeholder="Brief description of this category"
              rows={3}
              className={styles.textarea}
            />
          </div>

          <div className={styles.formActions}>
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className={styles.cancelButton}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading || !formData.name.trim()}
              className={styles.submitButton}
            >
              {isLoading && <span className={styles.loadingText}>...</span>}
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCategoryModal;
