import { useState, useRef, useEffect } from "react";
import { useCreateStory } from "./useCreateStory";
import type { Story } from "../interfaces";

interface CategoryFormData {
  title: string;
  body: string;
  categoryIds: string[];
  skip: boolean;
}

export const useCreatePostForm = (
  onClose: () => void,
  story?: Story,
  categories?: { categoryId: string; name: string }[]
) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const {
    createStory,
    updateStory,
    loading,
    error: hookError,
  } = useCreateStory(story?.storyId);

  const [formData, setFormData] = useState<CategoryFormData>({
    title: story?.title || "",
    body: story?.body || "",
    categoryIds: [],
    skip: false,
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (story && categories && formData.categoryIds.length === 0) {
      const categoryIds = categories
        .filter((cat) => story.categoryNames.includes(cat.name))
        .map((cat) => cat.categoryId);
      setFormData((prev) => ({
        ...prev,
        categoryIds,
      }));
    }
  }, [story, categories, formData.categoryIds.length]);

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
    const result = await createStory({ ...formData, skip: !formData.skip });
    if (result.success) {
      onClose();
    } else {
      setError(hookError);
      return;
    }
  };

  const handleEdit = async () => {
    setError(null);
    if (!validateForm()) return;
    const {skip, ...payload} = formData;
    const result = await updateStory(payload);
    if (result.success) {
      onClose();
    } else {
      setError(result.error!);
      return;
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
    handleEdit,
  };
};
