import React, { useState } from "react";
import { useCreatePostForm } from "../../hooks/useCreatePostForm";
import { useCategories } from "../../hooks/useCategories";
import TitleInput from "./TitleInput";
import ContentEditor from "./ContentEditor";
import TagSelector from "./TagSelector";
import SummaryToggle from "./SummaryToggle";
import ErrorMessage from "./ErrorMessage";
import FormActions from "./FormActions";

interface CreatePostFormProps {
  onClose: () => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();
  const {
    formData,
    loading,
    error,
    textareaRef,
    handleFieldChange,
    handleCategoryChange,
    handleToggleSummary,
    handleInsertMarkdown,
    handlePublish,
  } = useCreatePostForm(onClose);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="space-y-6"
    >
      <TitleInput value={formData.title} onChange={handleFieldChange} />

      <ContentEditor
        content={formData.body}
        onContentChange={handleFieldChange}
        onInsertMarkdown={handleInsertMarkdown}
        textareaRef={textareaRef}
      />

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Tags
        </label>
        <TagSelector
          selectedCategoryIds={formData.categoryIds}
          onChange={handleCategoryChange}
          categories={categories}
          loading={categoriesLoading}
          error={categoriesError}
          isOpen={isDropdownOpen}
          onOpenChange={setIsDropdownOpen}
        />
      </div>

      <SummaryToggle enabled={formData.skip} onToggle={handleToggleSummary} />

      <ErrorMessage message={error} />

      <FormActions
        loading={loading}
        onCancel={onClose}
        onPublish={handlePublish}
      />
    </form>
  );
};

export default CreatePostForm;
