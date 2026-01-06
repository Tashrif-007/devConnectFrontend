import React from "react";
import { FiX, FiChevronDown } from "react-icons/fi";
import type { Category } from "../../types";

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
    <div className="relative">
      <div className="flex flex-wrap gap-2 mb-2">
        {selectedCategories.map((cat) => (
          <div
            key={cat.categoryId}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
          >
            {cat.name}
            <button
              type="button"
              onClick={() => handleRemoveCategory(cat.categoryId)}
              className="hover:text-gray-900 transition-colors"
            >
              <FiX size={14} />
            </button>
          </div>
        ))}
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => onOpenChange(!isOpen)}
          disabled={loading || error !== null}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-left flex items-center justify-between hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="text-gray-600">
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
            className={`text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && availableCategories.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
            {availableCategories.map((cat) => (
              <button
                key={cat.categoryId}
                type="button"
                onClick={() => {
                  handleAddCategory(cat.categoryId);
                  onOpenChange(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
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
