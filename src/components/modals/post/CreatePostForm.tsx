import React, { useState } from "react";
import { useCreatePostForm } from "../../../hooks/useCreatePostForm";
import InputField from "../../ui/InputField";
import ContentEditor from "../forms/ContentEditor";
import TagSelector from "../forms/TagSelector";
import SummaryToggle from "../shared/SummaryToggle";
import ErrorMessage from "../forms/ErrorMessage";
import FormActions from "../forms/FormActions";
import { Header } from "../../ui";
import { useGetCategories } from "../../../queries";
import styles from "./CreatePostForm.module.css";
import type { Story } from "../../../interfaces";

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
      className={styles.form}
    >
      {" "}
      <Header level={2} value={title} className={styles.title} />
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
        <label className={styles.label}>Tags</label>
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
