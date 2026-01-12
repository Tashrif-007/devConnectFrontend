import React from "react";
import { FiX, FiChevronDown } from "react-icons/fi";
import styles from "./TagSelector.module.css";
import type { Category } from "../../../interfaces";

interface TagSelectorProps {
  selectedCategoryIds: string[];
  onChange: (categoryIds: string[]) => void;
  categories: Category[];
  loading: boolean;
  error: string | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const TagSelector: React.FC<TagSelectorProps> = ({
  selectedCategoryIds,
  onChange,
  categories,
  loading,
  error,
  isOpen,
  onOpenChange,
}) => {
  const selectedCategories = categories.filter((cat) =>
    selectedCategoryIds.includes(cat.categoryId)
  );

  const availableCategories = categories.filter(
    (cat) => !selectedCategoryIds.includes(cat.categoryId)
  );

  const handleAddCategory = (categoryId: string) => {
    onChange([...selectedCategoryIds, categoryId]);
  };

  const handleRemoveCategory = (categoryId: string) => {
    onChange(selectedCategoryIds.filter((id) => id !== categoryId));
  };

  return (
    <div className={styles.root}>
      <div className={styles.selectedTags}>
        {selectedCategories.map((cat) => (
          <div key={cat.categoryId} className={styles.tag}>
            {cat.name}
            <button
              type="button"
              onClick={() => handleRemoveCategory(cat.categoryId)}
              className={styles.tagRemoveButton}
            >
              <FiX size={14} />
            </button>
          </div>
        ))}
      </div>

      <div className={styles.dropdownContainer}>
        <button
          type="button"
          onClick={() => onOpenChange(!isOpen)}
          disabled={loading || error !== null}
          className={styles.dropdownButton}
        >
          <span className={styles.dropdownButtonText}>
            {loading
              ? "Loading categories..."
              : error
              ? "Error loading categories"
              : availableCategories.length > 0
              ? "Select tags..."
              : "No more tags available"}
          </span>
          <FiChevronDown
            size={18}
            className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
          />
        </button>

        {isOpen && availableCategories.length > 0 && (
          <div className={styles.dropdownMenu}>
            {availableCategories.map((cat) => (
              <button
                key={cat.categoryId}
                type="button"
                onClick={() => {
                  handleAddCategory(cat.categoryId);
                  onOpenChange(false);
                }}
                className={styles.dropdownMenuItem}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TagSelector;
