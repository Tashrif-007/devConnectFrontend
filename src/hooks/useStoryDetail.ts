import { useState, useEffect } from "react";
import { storyService } from "../services/storyService";
import type { Story } from "../types";

export interface UseStoryDetailReturn {
  story: Story | null;
  loading: boolean;
  error: string | null;
}

export const useStoryDetail = (
  storyId: string | undefined
): UseStoryDetailReturn => {
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      if (!storyId) {
        setError("Story ID not found");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await storyService.getStoryById(storyId);

        if (response.success && response.data) {
          setStory(response.data);
        } else {
          setError(response.message || "Failed to fetch story");
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch story";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [storyId]);

  return {
    story,
    loading,
    error,
  };
};
