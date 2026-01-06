import React, { useState } from "react";
import { Button } from "../common";

interface CommentFormProps {
  onSubmit: (body: string) => Promise<boolean>;
  isLoading?: boolean;
}

const CommentForm: React.FC<CommentFormProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!body.trim()) {
      setError("Comment cannot be empty");
      return;
    }

    setSubmitting(true);
    const success = await onSubmit(body);
    setSubmitting(false);

    if (success) {
      setBody("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gray-200 rounded-lg p-4 mb-6 bg-white"
    >
      <label className="block mb-3">
        <p className="text-sm font-medium text-gray-700 mb-2">Add a Comment</p>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Share your thoughts..."
          disabled={submitting || isLoading}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed resize-none"
          rows={4}
        />
      </label>

      {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

      <Button
        type="submit"
        disabled={submitting || isLoading || !body.trim()}
        className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {submitting ? "Posting..." : "Post Comment"}
      </Button>
    </form>
  );
};

export default CommentForm;
