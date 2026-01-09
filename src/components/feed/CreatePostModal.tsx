import type React from "react";
import { Header, InputField, Modal } from "../ui";
import { AuthInputs } from "../../layouts/AuthInputs";
import ContentEditor from "../modals/ContentEditor";
import TagSelector from "../modals/TagSelector";
import SummaryToggle from "../modals/SummaryToggle";
import ErrorMessage from "../modals/ErrorMessage";
import FormActions from "../modals/FormActions";
import { useState } from "react";
import { useCreatePostForm } from "../../hooks/useCreatePostForm";
import { useGetCategories } from "../../queries";

type CreatePostModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  onClose,
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
  } = useCreatePostForm(onClose);

  return (
    <Modal
      isOpen={isOpen}
      header="Create New Post"
      showIcon={false}
      onClose={onClose}
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <AuthInputs>
          <InputField
            label="Post Title"
            name="title"
            placeholder="Enter an engaging title..."
            value={formData.title}
            onChange={handleFieldChange}
          />
        </AuthInputs>
        <ContentEditor
          content={formData.body}
          onContentChange={handleFieldChange}
          onInsertMarkdown={handleInsertMarkdown}
          textareaRef={textareaRef}
        />
        <div className="mt-4">
          <Header
            level={2}
            value="Tags"
            className="block text-sm font-semibold text-gray-900 mb-2"
          />
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
    </Modal>
  );
};

export default CreatePostModal;
