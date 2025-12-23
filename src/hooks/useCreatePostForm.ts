import { useState, useRef } from "react";
import { storyService } from "../services/storyService";

interface FormData {
  title: string;
  body: string;
  categoryIds: string[];
  skip: boolean;
}

export const useCreatePostForm = (onClose: () => void) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [formData, setFormData] = useState<FormData>({
    title: "",
    body: "",
    categoryIds: [],
    skip: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (categoryIds: string[]) => {
    setFormData({ ...formData, categoryIds });
  };

  const handleToggleSummary = () => {
    setFormData({ ...formData, skip: !formData.skip });
  };

  const handleInsertMarkdown = (before: string, after: string = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.body.substring(start, end);

    const newBody =
      formData.body.substring(0, start) +
      before +
      selectedText +
      after +
      formData.body.substring(end);

    setFormData({ ...formData, body: newBody });

    setTimeout(() => {
      textarea.focus();
      const cursorPos = start + before.length + selectedText.length;
      textarea.setSelectionRange(cursorPos, cursorPos);
    }, 0);
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      setError("Post title is required");
      return false;
    }
    if (!formData.body.trim()) {
      setError("Post content is required");
      return false;
    }
    if (formData.categoryIds.length === 0) {
      setError("Please select at least one tag/category");
      return false;
    }
    return true;
  };

  const handlePublish = async () => {
    setError(null);

    if (!validateForm()) return;

    setLoading(true);
    try {
      console.log(formData.skip);
      const response = await storyService.createStory({
        title: formData.title,
        body: formData.body,
        categoryIds: formData.categoryIds,
        skip: !formData.skip,
      });

      if (!response.success) {
        setError(response.message || "Failed to publish post");
        return;
      }

      console.log("Story published successfully:", response.data);
      onClose();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to publish post";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    error,
    textareaRef,
    handleFieldChange,
    handleCategoryChange,
    handleToggleSummary,
    handleInsertMarkdown,
    handlePublish,
  };
};
