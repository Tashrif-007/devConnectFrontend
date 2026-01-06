import { useState, useCallback } from "react";
import { storyService } from "../services/storyService";
import type { UseCommentsReturn, CreateCommentPayload, Comment } from "../types";

export const useComments = (): UseCommentsReturn => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = useCallback(async (storyId: string) => {
    setLoading(true);
    setError(null);

    const response = await storyService.getCommentsByStoryId(storyId);

    if (response.success && response.data?.data) {
      setComments(response.data.data);
    } else {
      setError(response.message || "Failed to fetch comments");
    }

    setLoading(false);
  }, []);

  const addComment = useCallback(
    async (storyId: string, body: string): Promise<boolean> => {
      setError(null);

      const payload: CreateCommentPayload = { body };
      const response = await storyService.createComment(storyId, payload);

      if (response.success && response.data) {
        setComments((prev) => [...prev, response.data!]);
        return true;
      } else {
        setError(response.message || "Failed to add comment");
        return false;
      }
    },
    []
  );

  return {
    comments,
    loading,
    error,
    addComment,
    fetchComments,
  };
};
