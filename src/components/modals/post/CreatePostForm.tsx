import React, { useState } from "react";
import { useCreatePostForm } from "../../hooks/useCreatePostForm";
import InputField from "../ui/InputField";
import ContentEditor from "./ContentEditor";
import TagSelector from "./TagSelector";
import SummaryToggle from "./SummaryToggle";
import ErrorMessage from "./ErrorMessage";
import FormActions from "./FormActions";
import { Header } from "../ui";
import type { Story } from "../../types";
import { useGetCategories } from "../../queries";

interface CreatePostFormProps {
  onClose: () => void;
  story?: Story;
  title: string;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({
  story,
  onClose,
  title,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useGetCategories();
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
    handleEdit,
  } = useCreatePostForm(onClose, story, categories);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="space-y-6 max-w-4xl mx-auto px-4 py-8"
    >
      {" "}
      <Header
        level={2}
        value={title}
        className="text-3xl font-bold text-gray-900"
      />
      <InputField
        label="Post Title"
        name="title"
        type="text"
        value={formData.title}
        onChange={handleFieldChange}
        placeholder="Enter an engaging title..."
      />
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
        onPublish={story ? handleEdit : handlePublish}
      />
    </form>
  );
};

export default CreatePostForm;
